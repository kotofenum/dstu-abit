import { gql, Query } from "overmind-graphql";
import {
  AddCompetition,
  AddCompetitionVariables,
} from "./graphql-types/AddCompetition";
import {
  EditCompetition,
  EditCompetitionVariables,
} from "./graphql-types/EditCompetition";

export const addCompetition: Query<
  AddCompetition,
  AddCompetitionVariables
> = gql`
  mutation AddCompetition($input: CompetitionInput!) {
    addCompetition(input: $input) {
      uid
      title
      date
      target
      link
      group
    }
  }
`;

export const editCompetition: Query<
  EditCompetition,
  EditCompetitionVariables
> = gql`
  mutation EditCompetition($input: EditCompetitionInput!) {
    editCompetition(input: $input) {
      uid
      title
      date
      target
      link
      group
    }
  }
`;
