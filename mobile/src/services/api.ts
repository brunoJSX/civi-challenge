import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://YOUR_API_IP:3333',
});
