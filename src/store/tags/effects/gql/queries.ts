import { gql, Query } from "overmind-graphql";
import { MyTags } from "./graphql-types/MyTags";

export const myTags: Query<MyTags> = gql`
  query MyTags {
    myUserTags {
      majors {
        uid
        title
        code
        fundedPlaces
      }
      specialties {
        uid
        title
        code
      }
      programs {
        uid
        title
        attendance
        degree
        studyPeriod
        languages
      }
    }
  }
`;
