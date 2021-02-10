import { Me } from './graphql-types/Me';
import { gql, Query } from "overmind-graphql";

export const me: Query<Me> = gql`
  query Me {
    me {
      uid
      firstName
      lastName
      patronym
      country
      locality
      birthDate
      email
      type
      school
      position
      child
      course
      phone
      picture
    }
  }
`;
