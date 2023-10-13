import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export async function usePostCommentRemove(commentId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  try {
    setLoading(true);
    setError(null);
    await postCommentService.remove(commentId);
  } catch {
    setError(true);
  } finally {
    setLoading(false);
  }

  return {
    loading,
    error,
  };
}
