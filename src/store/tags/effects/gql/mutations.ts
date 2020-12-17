import { gql, Query } from "overmind-graphql";
import { CreateUserTag, CreateUserTagVariables } from "./graphql-types/CreateUserTag";
import { RemoveUserTag, RemoveUserTagVariables } from "./graphql-types/RemoveUserTag";

export const createUserTag: Query<CreateUserTag, CreateUserTagVariables> = gql`
  mutation CreateUserTag($input: UserTagInput!) {
    createUserTag(input: $input) {
      uid
      relationId
      relationType
      user {
        uid
        firstName
        lastName
      }
    }
  }
`;

export const removeUserTag: Query<RemoveUserTag, RemoveUserTagVariables> = gql`
  mutation RemoveUserTag($input: UserTagInput!) {
    removeUserTag(input: $input) {
      result
    }
  }
`;
