import { Subjects } from './graphql-types/Subjects';
import { ProgramsOfSpecialtyInput } from "./../../../graphql-global-types";
import { gql, Query } from "overmind-graphql";
import {
  ProgramsOfSpecialty,
  ProgramsOfSpecialtyVariables,
} from "./graphql-types/ProgramsOfSpecialty";
import { Program } from "./graphql-types/Program";
import { Programs } from "./graphql-types/Programs";
import { ProgramsWithSubjects } from "./graphql-types/ProgramsWithSubjects";

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

export const programsWithSubjects: Query<ProgramsWithSubjects> = gql`
  query ProgramsWithSubjects {
    programsWithSubjects {
      uid
      score
      title
      fullTimeForm
      mixedForm
      extramuralForm
      subjects {
        uid
        required
        score
        subject {
          uid
          title
        }
      }
    }
  }
`;

export const subjects: Query<Subjects> = gql`
  query Subjects {
    subjects {
      uid
      title
    }
  }
`;

export const program: Query<Program, { uid: string }> = gql`
  query Program($uid: ID!) {
    program(uid: $uid) {
      uid
      title
      score
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
