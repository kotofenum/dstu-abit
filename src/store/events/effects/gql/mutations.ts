import { gql, Query } from "overmind-graphql";
import { EditEvent, EditEventVariables } from "./graphql-types/EditEvent";
// import { JoinEvent, JoinEventVariables } from './graphql-types/JoinEvent'
// import { LeftEvent, LeftEventVariables } from './graphql-types/LeftEvent'

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

// export const leftEvent: Query<LeftEvent, LeftEventVariables> = gql`
//   mutation LeftEvent($input: JoinEventInput!) {
//     leftEvent(input: $input) {
//       uid
//       title
//       description
//       startsAt
//       endsAt
//       type
//       placesLeft
//       place
//       userIsJoined
//       reward
//       tags
//     }
//   }
// `
