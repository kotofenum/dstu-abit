/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { VisitInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddVisit
// ====================================================

export interface AddVisit_addVisit_user {
  uid: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AddVisit_addVisit_event {
  uid: string;
  title: string;
}

export interface AddVisit_addVisit {
  uid: string;
  user: AddVisit_addVisit_user;
  event: AddVisit_addVisit_event;
}

export interface AddVisit {
  addVisit: AddVisit_addVisit;
}

export interface AddVisitVariables {
  input: VisitInput;
}
