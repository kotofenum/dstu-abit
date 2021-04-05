/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user {
  uid: string;
  type: AccountType;
  lastName: string | null;
  firstName: string | null;
  patronym: string | null;
  phone: string;
  email: string | null;
  birthDate: any | null;
  country: string | null;
  locality: string | null;
  school: string | null;
  course: string | null;
  child: string | null;
  position: string | null;
}

export interface User {
  user: User_user;
}

export interface UserVariables {
  uid: string;
}
