import axios from 'axios';

import { URL } from '../../constants/userConstants';

export const API = axios.create({ baseURL: `${URL}` });
const API_NEW = axios.create({ baseURL: `${URL}` });

// for ec2 environment
// const API = axios.create({ baseURL: 'http://54.84.192.90:8080/api' });
// const API_NEW = axios.create({ baseURL: 'http://54.84.192.90:8081/api' });

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem('server_token'));

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
    req.headers['Content-Type'] = 'application/json';
  }

  return req;
});
