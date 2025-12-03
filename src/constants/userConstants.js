// ----------------------------
// 🔥 ACTION TYPES
// ----------------------------

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_RESET = 'UPDATE_PROFILE_RESET';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// ----------------------------
// 🔥 URL CONFIGURATION
// ----------------------------

function geturl() {
  const current = process.env.REACT_APP_API;

  if (current === 'local') {
    return "http://localhost:8000";   // Local backend
  }

  // 🟢 LIVE BACKEND (Railway)
  return "https://web-production-38b54.up.railway.app";
}

function getfrontendurl() {
  const current = process.env.REACT_APP_API;

  if (current === 'local') {
    return "http://localhost:3000"; // Local frontend
  }

  // 🟢 LIVE FRONTEND (Vercel)
  return "https://dream-11-t.vercel.app";
}

export const URL = geturl();
export const FURL = getfrontendurl();

// Videos भी backend से आते हैं → same URL
export const VIDEO_URL = URL;
