import { ProgramsOfSpecialtyInput } from "./../../../graphql-global-types";
import { gql, Query } from "overmind-graphql";
import {
  ProgramsOfSpecialty,
  ProgramsOfSpecialtyVariables,
} from "./graphql-types/ProgramsOfSpecialty";
import { Program } from "./graphql-types/Program";
import { Programs } from "./graphql-types/Programs";

export const programs: Query<Programs> = gql`
  query Programs {
    programs {
      uid
      title
      specialty {
        uid
        title
        code
        major {
          uid
          title
          code
        }
      }
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
`;

export const program: Query<Program, { uid: string }> = gql`
  query Program($uid: ID!) {
    program(uid: $uid) {
      uid
      title
      specialty {
        uid
        title
        code
        major {
          uid
          title
          code
        }
      }
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
`;

export const programsOfSpecialty: Query<
  ProgramsOfSpecialty,
  ProgramsOfSpecialtyVariables
> = gql`
  query ProgramsOfSpecialty($input: ProgramsOfSpecialtyInput!) {
    programsOfSpecialty(input: $input) {
      uid
      title
    }
  }
`;
