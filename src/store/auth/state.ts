type AuthState = {
  token: string | null;
  code: string | null;
  username: string | null;
};

export const state: AuthState = {
  token: null,
  code: null,
  username: null,
};
