import { User_user } from "./effects/gql/graphql-types/User";
import { Users_users } from "./effects/gql/graphql-types/Users";

type AdminState = {
  users: Users_users[];
  currentUser: User_user | null;
};

export const state: AdminState = {
  users: [],
  currentUser: null,
};
