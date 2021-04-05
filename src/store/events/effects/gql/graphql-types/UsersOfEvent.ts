/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersOfEvent
// ====================================================

export interface UsersOfEvent_usersOfEvent {
  uid: string;
  lastName: string | null;
  firstName: string | null;
  patronym: string | null;
}

export interface UsersOfEvent {
  usersOfEvent: UsersOfEvent_usersOfEvent[];
}

export interface UsersOfEventVariables {
  uid: string;
}
