const AUTH_TOKEN = 'token';

export const getToken = (): string | null => window.localStorage.getItem(AUTH_TOKEN);
export const saveToken = (token: string): void => window.localStorage.setItem(AUTH_TOKEN, token);
export const destroyToken = (): void => window.localStorage.removeItem(AUTH_TOKEN);

export const JWTService = { getToken, saveToken, destroyToken };
