import { UserTagInput } from "./../graphql-global-types";
import { AsyncAction } from "overmind";

export const getMyTags: AsyncAction = async ({ state, effects }) => {
  if (!state.auth.token) {
    console.warn("trying to fetch tags while unauthorized");
  } else {
    const { myUserTags } = await effects.tags.gql.queries.myTags();
    console.log(myUserTags);

    state.tags.tags = myUserTags;
  }
};

export const addTag: AsyncAction<UserTagInput> = async ({ effects }, input) => {
  const resp = await effects.tags.gql.mutations.createUserTag({
    input,
  });
  console.log(resp);
};

export const removeTag: AsyncAction<UserTagInput> = async (
  { effects },
  input
) => {
  const resp = await effects.tags.gql.mutations.removeUserTag({
    input,
  });
  console.log(resp);
};
