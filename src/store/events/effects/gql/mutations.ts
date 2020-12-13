import {gql, Query} from 'overmind-graphql'
import { JoinEvent, JoinEventVariables } from './graphql-types/JoinEvent'
import { LeftEvent, LeftEventVariables } from './graphql-types/LeftEvent'

export const joinEvent: Query<JoinEvent, JoinEventVariables> = gql`
  mutation JoinEvent($input: JoinEventInput!) {
    joinEvent(input: $input) {
      uid
      title
      description
      startsAt
      endsAt
      type
      placesLeft
      place
      userIsJoined
      reward
      tags
    }
  }
`

export const leftEvent: Query<LeftEvent, LeftEventVariables> = gql`
  mutation LeftEvent($input: JoinEventInput!) {
    leftEvent(input: $input) {
      uid
      title
      description
      startsAt
      endsAt
      type
      placesLeft
      place
      userIsJoined
      reward
      tags
    }
  }
`