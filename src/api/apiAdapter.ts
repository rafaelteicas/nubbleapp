import {MetaDataPage, Page} from '@types';

import {MetaDataPageAPI, PageAPI} from './apiTypes';

function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    currentPage: meta.current_page,
    firstPage: meta.first_page,
    lastPage: meta.last_page,
    perPage: meta.per_page,
    hasNextPage: meta.next_page_url !== null,
    hasPreviousPage: !meta.previous_page_url !== null,
  };
}

function toPageModel<ApiType, ModelType>(
  page: PageAPI<ApiType>,
  adapterToModel: (api: ApiType) => ModelType,
): Page<ModelType> {
  return {
    meta: toMetaDataPage(page.meta),
    data: page.data.map(adapterToModel),
  };
}

export const apiAdapter = {
  toMetaDataPage,
  toPageModel,
};
