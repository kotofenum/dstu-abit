/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CodeInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: SendCode
// ====================================================

export interface SendCode_sendCode_issuer {
  uid: string;
  firstName: string | null;
  lastName: string | null;
}

export interface SendCode_sendCode {
  uid: string;
  phone: string;
  expireAt: any;
  issuer: SendCode_sendCode_issuer;
}

export interface SendCode {
  sendCode: SendCode_sendCode;
}

export interface SendCodeVariables {
  input: CodeInput;
}
