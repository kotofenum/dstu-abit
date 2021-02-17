import { gql, Query } from "overmind-graphql";
import { AddPreuniversityRequest, AddPreuniversityRequestVariables } from "./graphql-types/AddPreuniversityRequest";

export const addPreuniversityRequest: Query<AddPreuniversityRequest, AddPreuniversityRequestVariables> = gql`
  mutation AddPreuniversityRequest($input: PreuniversityRequestInput!) {
    addPreuniversityRequest(input: $input) {
      uid
      category
      subcategory
      program
      user {
        uid
        firstName
        lastName
      }
    }
  }
`;
