import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.9:3333/',
  headers: {
    Authorization:
      'Bearer MQ.etDLOrR87wZCd3M4FT-R1RGcXoLxGf3-a9atB828DugtRWI3XbtN1GSSVJZs',
  },
});
