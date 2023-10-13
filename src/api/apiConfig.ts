import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.7:3333/',
  headers: {
    Authorization:
      'Bearer MQ.ESvvlSUrIBiapyirv28D2IBpRkwwQ1i5R4lJLtCTeZCLpBDpwI6PxEy6qGua',
  },
});
