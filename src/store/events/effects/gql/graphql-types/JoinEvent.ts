/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserEventInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: JoinEvent
// ====================================================

export interface JoinEvent_visitEvent_event {
  uid: string;
}

export interface JoinEvent_visitEvent {
  uid: string;
  event: JoinEvent_visitEvent_event;
  attending: boolean;
}

export interface JoinEvent {
  visitEvent: JoinEvent_visitEvent;
}

export interface JoinEventVariables {
  input: UserEventInput;
}
