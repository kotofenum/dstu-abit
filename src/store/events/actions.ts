import {AsyncAction} from 'overmind'
import { join } from 'path'
import { JoinEventInput } from '../graphql-global-types'

export const getEvents: AsyncAction = async ({state, effects}) => {
  const {events} = await effects.events.gql.queries.events()
  console.log(events)

  state.events.events = events
}

export const getEvent: AsyncAction<string> = async ({state, effects}, uid) => {
  const {event} = await effects.events.gql.queries.event({uid})

  state.events.currentEvent = event
}

export const joinEvent: AsyncAction<JoinEventInput, boolean> = async ({state, effects}, input) => {
  const {joinEvent} = await effects.events.gql.mutations.joinEvent({input})

  console.log(joinEvent)
  return !!joinEvent
}

export const leftEvent: AsyncAction<JoinEventInput, boolean> = async ({state, effects}, input) => {
  const {leftEvent} = await effects.events.gql.mutations.leftEvent({input})

  console.log(leftEvent)
  return !!leftEvent
}