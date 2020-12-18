/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// import { JoinEventInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: JoinEvent
// ====================================================

export interface JoinEvent_joinEvent {
  uid: string;
  title: string;
  description: string | null;
  startsAt: any;
  endsAt: any;
  type: string;
  placesLeft: number;
  place: string | null;
  userIsJoined: boolean;
  reward: number;
  tags: any | null;
}

export interface JoinEvent {
  joinEvent: JoinEvent_joinEvent;
}

export interface JoinEventVariables {
  // input: JoinEventInput;
}
