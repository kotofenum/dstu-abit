/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login {
  access_token: string | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input: LoginInput;
}
