/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserEventInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: LeaveEvent
// ====================================================

export interface LeaveEvent_leaveEvent_event {
  uid: string;
}

export interface LeaveEvent_leaveEvent {
  uid: string;
  event: LeaveEvent_leaveEvent_event;
  attending: boolean;
}

export interface LeaveEvent {
  leaveEvent: LeaveEvent_leaveEvent;
}

export interface LeaveEventVariables {
  input: UserEventInput;
}
