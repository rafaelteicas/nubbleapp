import {User} from '@domain';

export type SearchHistoryService = {
  userList: User[];
  addUser: (user: User) => void;
  removeUser: (id: User['id']) => void;
  clearUserList: () => void;
};
