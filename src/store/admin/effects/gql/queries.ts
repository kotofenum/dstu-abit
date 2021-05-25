import { gql, Query } from "overmind-graphql";
import { EventsOfUser } from "./graphql-types/EventsOfUser";
import { TagsOfUser } from "./graphql-types/TagsOfUser";
import { User } from "./graphql-types/User";
import { Users } from "./graphql-types/Users";
import { UsersWithInterests } from "./graphql-types/UsersWithInterests";

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

export const usersWithInterests: Query<UsersWithInterests> = gql`
  query UsersWithInterests {
    usersWithInterests {
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
      userEvents {
        uid
        event {
          uid
          title
        }
        attending
      }
      majors {
        uid
        title
      }
      specialties {
        uid
        title
      }
      programs {
        uid
        title
      }
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

export const eventsOfUser: Query<EventsOfUser, { uid: string }> = gql`
  query EventsOfUser($uid: ID!) {
    eventsOfUser(uid: $uid) {
      uid
      event {
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
  }
`;

export const tagsOfUser: Query<TagsOfUser, { uid: string }> = gql`
  query TagsOfUser($uid: ID!) {
    tagsOfUser(uid: $uid) {
      majors {
        uid
        title
        fullTimePlaces
        fullTimeMeta
        mixedPlaces
        mixedMeta
        extramuralPlaces
        extramuralMeta
      }
      specialties {
        uid
        title
        code
        fullTimePlaces
        fullTimeMeta
        mixedPlaces
        mixedMeta
        extramuralPlaces
        extramuralMeta
      }
      programs {
        uid
        title
        fullTimePlaces
        fullTimeMeta
        mixedPlaces
        mixedMeta
        extramuralPlaces
        extramuralMeta
        fullTimeForm
        mixedForm
        extramuralForm
        degree
        studyPeriod
        languages
        description
        advantages
        partners
        projectsAndPractices
        leadProfessors
        graduates
        unit
        supervisor
      }
    }
  }
`;
