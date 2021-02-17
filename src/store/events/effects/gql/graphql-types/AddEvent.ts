/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EventInput, EventType, ModuleType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddEvent
// ====================================================

export interface AddEvent_addEvent {
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

export interface AddEvent {
  addEvent: AddEvent_addEvent;
}

export interface AddEventVariables {
  input: EventInput;
}
