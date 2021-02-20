/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ModuleEventsInput, EventType, ModuleType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: EventsForModule
// ====================================================

export interface EventsForModule_eventsForModule {
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

export interface EventsForModule {
  eventsForModule: EventsForModule_eventsForModule[];
}

export interface EventsForModuleVariables {
  input: ModuleEventsInput;
}
