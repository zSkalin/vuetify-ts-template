const AUTH_TOKEN = 'token';

export const getToken = () => window.localStorage.getItem(AUTH_TOKEN);
export const saveToken = token => window.localStorage.setItem(AUTH_TOKEN, token);
export const destroyToken = () => window.localStorage.removeItem(AUTH_TOKEN);

export const JWTService = { getToken, saveToken, destroyToken };
