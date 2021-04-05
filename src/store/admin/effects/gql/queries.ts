import { gql, Query } from "overmind-graphql";
import { User } from "./graphql-types/User";
import { Users } from "./graphql-types/Users";

export const users: Query<Users> = gql`
  query Users {
    users {
      uid
      type
      lastName
      firstName
      patronym
      phone
      email
      birthDate
      country
      locality
      school
      course
      child
      position
    }
  }
`;

export const user: Query<User, { uid: string }> = gql`
  query User($uid: ID!) {
    user(uid: $uid) {
      uid
      type
      lastName
      firstName
      patronym
      phone
      email
      birthDate
      country
      locality
      school
      course
      child
      position
    }
  }
`;
