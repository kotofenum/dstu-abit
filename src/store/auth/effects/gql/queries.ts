import { gql, Query } from "overmind-graphql";
import { Major } from "./graphql-types/Major";
import { Majors } from "./graphql-types/Majors";

// export const majors: Query<Majors> = gql`
//   query Majors {
//     majors {
//       uid
//       title
//       code
//       fundedPlaces
//     }
//   }
// `;

// export const major: Query<Major, {uid: string}> = gql`
//   query Major($uid: ID!) {
//     major(uid: $uid) {
//       uid
//       title
//       code
//       fundedPlaces
//     }
//   }
// `;