import { Events } from './graphql-types/Events';
import { Event } from './graphql-types/Event';
import {gql, Query} from 'overmind-graphql'

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
`

export const event: Query<Event, {uid: string}> = gql`
  query Event($uid: ID!) {
    event (uid: $uid) {    
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
`
