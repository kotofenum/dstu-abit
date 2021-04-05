/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users {
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

export interface Users {
  users: Users_users[];
}
