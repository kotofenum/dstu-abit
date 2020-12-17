/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserTagInput, TagRelationType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateUserTag
// ====================================================

export interface CreateUserTag_createUserTag_user {
  uid: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateUserTag_createUserTag {
  uid: string;
  relationId: string;
  relationType: TagRelationType;
  user: CreateUserTag_createUserTag_user;
}

export interface CreateUserTag {
  createUserTag: CreateUserTag_createUserTag;
}

export interface CreateUserTagVariables {
  input: UserTagInput;
}
