/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditCompetitionInput, CompetitionGroup } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditCompetition
// ====================================================

export interface EditCompetition_editCompetition {
  uid: string;
  title: string;
  date: string;
  target: string;
  link: string | null;
  group: CompetitionGroup;
}

export interface EditCompetition {
  editCompetition: EditCompetition_editCompetition;
}

export interface EditCompetitionVariables {
  input: EditCompetitionInput;
}
