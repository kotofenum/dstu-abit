/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompetitionGroup } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Competitions
// ====================================================

export interface Competitions_competitions {
  uid: string;
  title: string;
  date: string;
  target: string;
  link: string | null;
  group: CompetitionGroup;
}

export interface Competitions {
  competitions: Competitions_competitions[];
}
