import { gql, Query } from "overmind-graphql";
import { EditProgram, EditProgramVariables } from "./graphql-types/EditProgram";
import { EditProgramScore, EditProgramScoreVariables } from "./graphql-types/EditProgramScore";

export const editProgramScore: Query<EditProgramScore, EditProgramScoreVariables> = gql`
  mutation EditProgramScore($input: EditProgramScoreInput!) {
    editProgramScore(input: $input) {
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

export const editProgram: Query<EditProgram, EditProgramVariables> = gql`
  mutation EditProgram($input: EditProgramInput!) {
    editProgram(input: $input) {
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
