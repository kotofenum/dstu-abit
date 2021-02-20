/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditEventInput, EventType, ModuleType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditEvent
// ====================================================

export interface EditEvent_editEvent {
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

export interface EditEvent {
  editEvent: EditEvent_editEvent;
}

export interface EditEventVariables {
  input: EditEventInput;
}
