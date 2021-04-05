/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompetitionInput, CompetitionGroup } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddCompetition
// ====================================================

export interface AddCompetition_addCompetition {
  uid: string;
  title: string;
  date: string;
  target: string;
  link: string | null;
  group: CompetitionGroup;
}

export interface AddCompetition {
  addCompetition: AddCompetition_addCompetition;
}

export interface AddCompetitionVariables {
  input: CompetitionInput;
}
