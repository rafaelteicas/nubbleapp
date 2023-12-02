import {useEffect, useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Post[]>([]);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      if (meta.hasNextPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
      setPostList(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    postList,
    loading,
    fetchNextPage,
    refresh: fetchInitialData,
  };
}
