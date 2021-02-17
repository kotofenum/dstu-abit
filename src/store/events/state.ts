import { Event_event } from "./effects/gql/graphql-types/Event";
import { Events_events } from "./effects/gql/graphql-types/Events";
import { EventsForModule_eventsForModule } from "./effects/gql/graphql-types/EventsForModule";
import { EventsForUserTags_eventsForUserTags } from "./effects/gql/graphql-types/EventsForUserTags";
import { MyUserEvents_myUserEvents } from "./effects/gql/graphql-types/MyUserEvents";

type EventsState = {
  events: Events_events[];
  personalEvents: EventsForUserTags_eventsForUserTags[];
  eventsForModule: EventsForModule_eventsForModule[];
  myUserEvents: MyUserEvents_myUserEvents[];
  currentEvent: Event_event | null;
};

export const state: EventsState = {
  events: [],
  personalEvents: [],
  eventsForModule: [],
  myUserEvents: [],
  currentEvent: null,
};
