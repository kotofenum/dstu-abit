/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Event
// ====================================================

export interface Event_event {
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

export interface Event {
  event: Event_event;
}

export interface EventVariables {
  uid: string;
}
