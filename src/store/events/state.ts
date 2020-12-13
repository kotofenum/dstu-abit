import { Event_event } from "./effects/gql/graphql-types/Event";
import { Events_events } from "./effects/gql/graphql-types/Events";

type EventsState = {
  events: Events_events[];
  currentEvent: Event_event | null;
};

export const state: EventsState = {
  events: [],
  currentEvent: null,
};
