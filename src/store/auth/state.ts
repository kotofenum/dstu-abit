import { Me_me } from "./effects/gql/graphql-types/Me";
import { derived } from "overmind";
import { config } from "..";

type AuthState = {
  token: string | null;
  code: string | null;
  username: string | null;
  user: Me_me | null;
  isAdmin: boolean;
};

export const state: AuthState = {
  token: null,
  code: null,
  username: null,
  user: null,
  isAdmin: derived<AuthState, typeof config.state, boolean>((state) => {
    return state.user?.isAdmin || false;
  }),
};
