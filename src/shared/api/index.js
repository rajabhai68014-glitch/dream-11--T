import axios from "axios";
import { URL } from "../../constants/userConstants";

// ---- Axios Instances ----
export const API = axios.create({
  baseURL: `${URL}`,
  withCredentials: true,   // 👈 IMPORTANT
});

export const API_NEW = axios.create({
  baseURL: `${URL}`,
  withCredentials: true,   // 👈 IMPORTANT
});

// ---- Interceptor (No Token Needed) ----
API.interceptors.request.use((req) => {
  return req;  // ✔ Cookie automatically जाएगी
});

API_NEW.interceptors.request.use((req) => {
  return req;
});
