/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditUserInput, AccountType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditUser
// ====================================================

export interface EditUser_editUser {
  uid: string;
  firstName: string | null;
  lastName: string | null;
  patronym: string | null;
  type: AccountType;
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

export interface EditUser {
  editUser: EditUser_editUser;
}

export interface EditUserVariables {
  input: EditUserInput;
}
