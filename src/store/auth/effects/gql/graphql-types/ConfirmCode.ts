/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ConfirmCodeInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: ConfirmCode
// ====================================================

export interface ConfirmCode_confirmCode {
  access_token: string | null;
}

export interface ConfirmCode {
  confirmCode: ConfirmCode_confirmCode;
}

export interface ConfirmCodeVariables {
  input: ConfirmCodeInput;
}
