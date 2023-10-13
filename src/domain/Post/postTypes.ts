export type Post = {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
};

export type PostAPI = {
  id: number; // 1;
  text: string; // 'Bom dia!';
  user_id: number; // 1;
  image_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg';
  is_fixed: boolean; // false;
  is_activated: true;
  created_at: string; // '2023-10-11T09:54:09.629-04:00';
  updated_at: string; //'2023-10-11T09:54:09.636-04:00';
  user: {
    id: number; // 1;
    first_name: string; // 'Maria';
    last_name: string; // 'Julia';
    username: string; // 'mariajulia';
    email: string; // 'mariajulia@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
    is_online: boolean; // false;
    full_name: string; //'Maria Julia';
  };
  status: string; // 'published';
  meta: {
    like_count: string; // '4';
    favorite_count: string; // '1';
    comments_count: string; // '3';
  };
};
