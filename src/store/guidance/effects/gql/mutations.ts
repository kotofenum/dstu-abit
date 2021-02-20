import { gql, Query } from "overmind-graphql";
import { AddGuidance, AddGuidanceVariables } from "./graphql-types/AddGuidance";
import {
  EditGuidance,
  EditGuidanceVariables,
} from "./graphql-types/EditGuidance";

export const addGuidance: Query<AddGuidance, AddGuidanceVariables> = gql`
  mutation AddGuidance($input: GuidanceInput!) {
    addGuidance(input: $input) {
      uid
      title
      date
      description
      link
    }
  }
`;

export const editGuidance: Query<EditGuidance, EditGuidanceVariables> = gql`
  mutation EditGuidance($input: EditGuidanceInput!) {
    editGuidance(input: $input) {
      uid
      title
      date
      description
      link
    }
  }
`;
