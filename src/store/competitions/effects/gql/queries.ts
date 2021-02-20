import { gql, Query } from "overmind-graphql";
import { Competition } from "./graphql-types/Competition";
import { Competitions } from "./graphql-types/Competitions";

export const competitions: Query<Competitions> = gql`
  query Competitions {
    competitions {
      uid
      title
      date
      target
      link
      group
    }
  }
`;

export const competition: Query<Competition, { uid: string }> = gql`
  query Competition($uid: ID!) {
    competition(uid: $uid) {
      uid
      title
      date
      target
      link
      group
    }
  }
`;
