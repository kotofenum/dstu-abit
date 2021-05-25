import { AsyncAction } from "overmind";

export const getUsers: AsyncAction = async ({ state, effects }) => {
  const { users } = await effects.admin.gql.queries.users();

  state.admin.users = users;
};

export const getUsersWithInterests: AsyncAction = async ({ state, effects }) => {
  const { usersWithInterests } = await effects.admin.gql.queries.usersWithInterests();

  state.admin.usersWithInterests = usersWithInterests;
};

export const getUser: AsyncAction<string> = async ({ state, effects }, uid) => {
  const { user } = await effects.admin.gql.queries.user({
    uid,
  });

  state.admin.currentUser = user;
};

export const getUserEvents: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { eventsOfUser } = await effects.admin.gql.queries.eventsOfUser({
    uid,
  });

  state.admin.eventsOfUser = eventsOfUser;
};

export const getUserTags: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { tagsOfUser } = await effects.admin.gql.queries.tagsOfUser({
    uid,
  });

  state.admin.tagsOfUser = tagsOfUser;
};
