/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CompetitionGroup } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Competition
// ====================================================

export interface Competition_competition {
  uid: string;
  title: string;
  date: string;
  target: string;
  link: string | null;
  group: CompetitionGroup;
}

export interface Competition {
  competition: Competition_competition;
}

export interface CompetitionVariables {
  uid: string;
}
