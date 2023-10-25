import {User, UserAPI} from './userTypes';

function toUser(userApi: UserAPI): User {
  return {
    id: userApi.id,
    email: userApi.email,
    firstName: userApi.first_name,
    fullName: userApi.full_name,
    username: userApi.username,
    isOnline: userApi.is_online,
    lastName: userApi.last_name,
    profileUrl: userApi.profile_url,
  };
}

export const userAdapter = {
  toUser,
};
