/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Events
// ====================================================

export interface Events_events {
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
}

export interface Events {
  events: Events_events[];
}
