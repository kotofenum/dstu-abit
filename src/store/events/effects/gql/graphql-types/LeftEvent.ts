/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { JoinEventInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: LeftEvent
// ====================================================

export interface LeftEvent_leftEvent {
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

export interface LeftEvent {
  leftEvent: LeftEvent_leftEvent;
}

export interface LeftEventVariables {
  input: JoinEventInput;
}
