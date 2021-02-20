/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GuidanceInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddGuidance
// ====================================================

export interface AddGuidance_addGuidance {
  uid: string;
  title: string;
  date: string;
  description: string;
  link: string | null;
}

export interface AddGuidance {
  addGuidance: AddGuidance_addGuidance;
}

export interface AddGuidanceVariables {
  input: GuidanceInput;
}
