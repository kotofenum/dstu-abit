import { gql, Query } from "overmind-graphql";
import { Guidance } from "./graphql-types/Guidance";
import { Guidances } from "./graphql-types/Guidances";

export const guidances: Query<Guidances> = gql`
  query Guidances {
    guidances {
      uid
      title
      date
      description
      link
    }
  }
`;

export const guidance: Query<Guidance, { uid: string }> = gql`
  query Guidance($uid: ID!) {
    guidance(uid: $uid) {
      uid
      title
      date
      description
      link
    }
  }
`;
