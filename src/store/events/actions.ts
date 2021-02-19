import {
  EditEventInput,
  ModuleEventsInput,
  VisitInput,
  UserEventInput,
  EventInput,
} from "./../graphql-global-types";
import { Action, AsyncAction } from "overmind";
import { JoinEvent_visitEvent } from "./effects/gql/graphql-types/JoinEvent";
import { LeaveEvent_leaveEvent } from "./effects/gql/graphql-types/LeaveEvent";
import { AddEvent_addEvent } from "./effects/gql/graphql-types/AddEvent";
import { EditEvent_editEvent } from "./effects/gql/graphql-types/EditEvent";
// import { JoinEventInput } from '../graphql-global-types'

export const getEvents: AsyncAction = async ({ state, effects }) => {
  const { events } = await effects.events.gql.queries.events();
  console.log(events);

  state.events.events = events;
};

export const myUserEvents: AsyncAction = async ({ state, effects }) => {
  const { myUserEvents } = await effects.events.gql.queries.myUserEvents();

  state.events.myUserEvents = myUserEvents;
};

export const getEvent: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { event } = await effects.events.gql.queries.event({ uid });

  state.events.currentEvent = event;
};

export const getEventsForUserTags: AsyncAction = async ({ state, effects }) => {
  const {
    eventsForUserTags,
  } = await effects.events.gql.queries.eventsForUserTags();
  console.log(eventsForUserTags);

  state.events.personalEvents = eventsForUserTags;
};

export const getEventsForModule: AsyncAction<ModuleEventsInput> = async (
  { state, effects },
  input
) => {
  const { eventsForModule } = await effects.events.gql.queries.eventsForModule({
    input,
  });
  console.log(eventsForModule);

  state.events.eventsForModule = eventsForModule;
};

// export const editEvent: AsyncAction<EditEventInput, boolean> = async (
//   { state, effects },
//   input
// ) => {
//   const { editEvent } = await effects.events.gql.mutations.editEvent({ input });

//   console.log(editEvent);
//   return !!editEvent;
// };

export const visitEvent: AsyncAction<VisitInput, boolean> = async (
  { state, effects },
  input
) => {
  const { addVisit } = await effects.events.gql.mutations.addVisit({ input });

  console.log(addVisit);
  return !!addVisit;
};

export const joinEvent: AsyncAction<
  UserEventInput,
  JoinEvent_visitEvent
> = async ({ state, effects }, input) => {
  const { visitEvent } = await effects.events.gql.mutations.joinEvent({
    input,
  });

  return visitEvent;
};

export const leaveEvent: AsyncAction<
  UserEventInput,
  LeaveEvent_leaveEvent
> = async ({ state, effects }, input) => {
  const { leaveEvent } = await effects.events.gql.mutations.leaveEvent({
    input,
  });

  return leaveEvent;
};

export const addEvent: AsyncAction<EventInput, AddEvent_addEvent> = async (
  { state, effects },
  input
) => {
  const { addEvent } = await effects.events.gql.mutations.addEvent({
    input,
  });

  return addEvent;
};

export const editEvent: AsyncAction<
  EditEventInput,
  EditEvent_editEvent
> = async ({ state, effects }, input) => {
  const { editEvent } = await effects.events.gql.mutations.editEvent({
    input,
  });

  return editEvent;
};

export const clearCurrentEvent: Action<void> = ({ state }) => {
  state.events.currentEvent = null;
  return;
};
