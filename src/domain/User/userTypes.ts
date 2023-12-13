export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  profileUrl: string;
  isOnline: boolean;
  fullName: string;
}

export interface UserAPI {
  id: number; // 1;
  first_name: string; // 'Maria';
  last_name: string; // 'Julia';
  username: string; // 'mariajulia';
  email: string; // 'mariajulia@coffstack.com';
  profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png';
  is_online: boolean; // false;
  full_name: string; //'Maria Julia';
}
