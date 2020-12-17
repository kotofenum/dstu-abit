import { Events } from "./graphql-types/Events";
import { Event } from "./graphql-types/Event";
import { gql, Query } from "overmind-graphql";
import { EventsForUserTags } from "./graphql-types/EventsForUserTags";
import { EventsForModule, EventsForModuleVariables } from "./graphql-types/EventsForModule";

export const events: Query<Events> = gql`
  query Events {
    events {
      uid
      title
      description
      type
      module
      faculty
      link
      reward
      limit
      placesLeft
      startsAt
      endsAt
    }
  }
`;

export const event: Query<Event, { uid: string }> = gql`
  query Event($uid: ID!) {
    event(uid: $uid) {
      uid
      title
      description
      type
      module
      faculty
      link
      reward
      limit
      placesLeft
      startsAt
      endsAt
    }
  }
`;

export const eventsForUserTags: Query<EventsForUserTags> = gql`
  query EventsForUserTags {
    eventsForUserTags {
      uid
      title
      description
      type
      module
      faculty
      link
      reward
      limit
      placesLeft
      startsAt
      endsAt
    }
  }
`;

export const eventsForModule: Query<
  EventsForModule,
  EventsForModuleVariables
> = gql`
  query EventsForModule($input: ModuleEventsInput!) {
    eventsForModule(input: $input) {
      uid
      title
      description
      type
      module
      faculty
      link
      reward
      limit
      placesLeft
      startsAt
      endsAt
    }
  }
`;
