/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PreuniversityRequestInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddPreuniversityRequest
// ====================================================

export interface AddPreuniversityRequest_addPreuniversityRequest_user {
  uid: string;
  firstName: string | null;
  lastName: string | null;
}

export interface AddPreuniversityRequest_addPreuniversityRequest {
  uid: string;
  category: string;
  subcategory: string | null;
  program: string;
  user: AddPreuniversityRequest_addPreuniversityRequest_user;
}

export interface AddPreuniversityRequest {
  addPreuniversityRequest: AddPreuniversityRequest_addPreuniversityRequest;
}

export interface AddPreuniversityRequestVariables {
  input: PreuniversityRequestInput;
}
