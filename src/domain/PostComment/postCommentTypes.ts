export type PostComment = {
  id: number;
  message: string;
  created_at: string;
  user: {
    id: number;
    profileUrl: string;
    userName: string;
    email: string;
    fullName: string;
  };
};

export type PostCommentAPI = {
  id: number; // 109;
  message: string; // 'Tempora nam voluptates.';
  user_id: number; // 7;
  post_id: number; // 1;
  created_at: string; // '2023-10-10T19:48:54.000-04:00';
  updated_at: string; // '2023-10-11T14:06:34.585-04:00';
  user: {
    id: number; // 7;
    first_name: string; //'Mateus';
    last_name: string; // 'de Souza';
    username: string; //'mateussouza';
    email: string; //'msouza@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png';
    is_online: boolean; // false;
    full_name: string; // 'Mateus de Souza';
  };
  meta: any; // {};
};
