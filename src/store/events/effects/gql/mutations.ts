import { AddVisit, AddVisitVariables } from "./graphql-types/AddVisit";
import { gql, Query } from "overmind-graphql";
import { EditEvent, EditEventVariables } from "./graphql-types/EditEvent";
import { JoinEvent, JoinEventVariables } from "./graphql-types/JoinEvent";
import { LeaveEvent, LeaveEventVariables } from "./graphql-types/LeaveEvent";
import { AddEvent, AddEventVariables } from "./graphql-types/AddEvent";
// import { JoinEvent, JoinEventVariables } from './graphql-types/JoinEvent'
// import { LeftEvent, LeftEventVariables } from './graphql-types/LeftEvent'

// export const editEvent: Query<EditEvent, EditEventVariables> = gql`
//   mutation EditEvent($input: EditEventInput!) {
//     editEvent(input: $input) {
//       uid
//       title
//       description
//       type
//       module
//       faculty
//       link
//       reward
//       limit
//       placesLeft
//       startsAt
//       endsAt
//     }
//   }
// `;

export const addVisit: Query<AddVisit, AddVisitVariables> = gql`
  mutation AddVisit($input: VisitInput!) {
    addVisit(input: $input) {
      uid
      user {
        uid
        firstName
        lastName
      }
      event {
        uid
        title
      }
    }
  }
`;

export const joinEvent: Query<JoinEvent, JoinEventVariables> = gql`
  mutation JoinEvent($input: UserEventInput!) {
    visitEvent(input: $input) {
      uid
      event {
        uid
      }
      attending
    }
  }
`;

export const leaveEvent: Query<LeaveEvent, LeaveEventVariables> = gql`
  mutation LeaveEvent($input: UserEventInput!) {
    leaveEvent(input: $input) {
      uid
      event {
        uid
      }
      attending
    }
  }
`;

export const addEvent: Query<AddEvent, AddEventVariables> = gql`
  mutation AddEvent($input: EventInput!) {
    addEvent(input: $input) {
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
export const editEvent: Query<EditEvent, EditEventVariables> = gql`
  mutation EditEvent($input: EditEventInput!) {
    editEvent(input: $input) {
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
