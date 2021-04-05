/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditGuidanceInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditGuidance
// ====================================================

export interface EditGuidance_editGuidance {
  uid: string;
  title: string;
  date: string;
  description: string;
  link: string | null;
}

export interface EditGuidance {
  editGuidance: EditGuidance_editGuidance;
}

export interface EditGuidanceVariables {
  input: EditGuidanceInput;
}
