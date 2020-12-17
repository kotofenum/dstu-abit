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
