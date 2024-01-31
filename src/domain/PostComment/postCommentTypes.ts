import {UserAPI} from '../User/userTypes';

export interface PostComment {
  id: number;
  message: string;
  created_at: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 113;
  message: string; // 'Terebro alveus aro atrox assumenda denego tergeo aurum colligo.';
  user_id: number; // 6;
  post_id: number; // 1;
  created_at: string; // '2023-12-05T03:01:49.000-03:00';
  updated_at: string; // '2023-12-05T11:46:45.630-03:00';
  user: UserAPI;
  meta: {};
}
