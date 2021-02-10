/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me {
  uid: string;
  firstName: string | null;
  lastName: string | null;
  patronym: string | null;
  country: string | null;
  locality: string | null;
  birthDate: any | null;
  email: string | null;
  type: AccountType;
  school: string | null;
  position: string | null;
  child: string | null;
  course: string | null;
  phone: string;
  picture: string | null;
}

export interface Me {
  me: Me_me;
}
