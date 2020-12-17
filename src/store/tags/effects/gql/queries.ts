import { gql, Query } from "overmind-graphql";
import { MyTags } from "./graphql-types/MyTags";

export const myTags: Query<MyTags> = gql`
  query MyTags {
    myUserTags {
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
