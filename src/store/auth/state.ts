import { Me_me } from "./effects/gql/graphql-types/Me";

type AuthState = {
  token: string | null;
  code: string | null;
  username: string | null;
  user: Me_me | null;
};

export const state: AuthState = {
  token: null,
  code: null,
  username: null,
  user: null,
};
