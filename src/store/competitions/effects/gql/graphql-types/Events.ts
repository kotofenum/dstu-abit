/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventType, ModuleType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Events
// ====================================================

export interface Events_events {
  uid: string;
  title: string;
  description: string | null;
  type: EventType;
  module: ModuleType;
  faculty: string | null;
  link: string | null;
  reward: number | null;
  limit: number | null;
  placesLeft: number | null;
  startsAt: any;
  endsAt: any;
}

export interface Events {
  events: Events_events[];
}
