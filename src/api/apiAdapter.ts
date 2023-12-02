import {MetaDataPage} from '@types';

import {MetaDataPageAPI} from './apiTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    currentPage: meta.current_page,
    firstPage: meta.first_page,
    lastPage: meta.last_page,
    perPage: meta.per_page,
    hasNextPage: !!meta.next_page_url !== null,
    hasPreviousPage: !meta.previous_page_url !== null,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
