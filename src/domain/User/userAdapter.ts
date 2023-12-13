import {User, UserAPI} from './userTypes';

function toUser(user: UserAPI): User {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    fullName: user.full_name,
    profileUrl: user.profile_url,
    username: user.username,
    isOnline: user.is_online,
  };
}

export const userAdapter = {
  toUser,
};
