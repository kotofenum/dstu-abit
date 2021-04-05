import { AsyncAction } from "overmind";

export const getUsers: AsyncAction = async ({ state, effects }) => {
  const { users } = await effects.admin.gql.queries.users();

  state.admin.users = users;
};

export const getUser: AsyncAction<string> = async ({ state, effects }, uid) => {
  const { user } = await effects.admin.gql.queries.user({
    uid,
  });

  state.admin.currentUser = user;
};
