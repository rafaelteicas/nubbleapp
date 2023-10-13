import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.1.7:3333/',
  headers: {
    Authorization:
      'Bearer MQ.mcvRGvxMj3zxG7AGq5D869kH2eiJjyR8VNa3cpzRtczINc67Pu0OWWB8jj04',
  },
});
