export interface MetaDataPageAPI {
  total: number; // 24;
  per_page: number; //10;
  current_page: number; // 1;
  last_page: number; // 3;
  first_page: number; // 1;
  first_page_url: string; // '/?page=1';
  last_page_url: string; // '/?page=3';
  next_page_url: string | null; // '/?page=2';
  previous_page_url: string | null;
}

export interface PageAPI<Data> {
  data: Data[];
  meta: MetaDataPageAPI;
}

export interface PageParams {
  page?: number;
  per_page?: number;
}
