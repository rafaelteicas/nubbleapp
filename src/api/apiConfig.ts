import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.7:3333/',
  headers: {
    Authorization:
      'Bearer MQ.cMHcCQ4L7H9tRFM9ULlLvRmLRAsocMsdnDQUUbzjnDfHkU7LMuZ3VZR-NY_a',
  },
});
