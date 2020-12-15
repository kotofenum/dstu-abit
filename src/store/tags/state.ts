import { MyTags_myUserTags } from "./effects/gql/graphql-types/MyTags";

type TagsState = {
  tags: MyTags_myUserTags | null;
};

export const state: TagsState = {
  tags: null,
};
