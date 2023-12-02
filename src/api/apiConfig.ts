import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333/',
  headers: {
    Authorization:
      'Bearer Mg.sM1JJCisX3ISIRC2D-1n27Br_UMujVm5NXgrQ3yaH18G-wm6IJPCr3d-g0eL',
  },
});
