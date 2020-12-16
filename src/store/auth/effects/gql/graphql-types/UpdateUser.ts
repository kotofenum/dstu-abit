/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateUserInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser {
  uid: string;
  firstName: string | null;
  lastName: string | null;
  patronym: string | null;
  birthDate: any | null;
  country: string | null;
  locality: string | null;
  email: string | null;
  pwd: string | null;
  school: string | null;
  position: string | null;
  child: string | null;
  course: string | null;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  input: UpdateUserInput;
}
