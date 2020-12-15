import { Program_program } from "./effects/gql/graphql-types/Program";
import { Programs_programs } from "./effects/gql/graphql-types/Programs";
import { ProgramsOfSpecialty_programsOfSpecialty } from "./effects/gql/graphql-types/ProgramsOfSpecialty";

type ProgramsState = {
  list: Programs_programs[];
  listOfSpecialty: ProgramsOfSpecialty_programsOfSpecialty[];
  currentProgram: Program_program | null;
  loading: boolean;
};

export const state: ProgramsState = {
  list: [],
  listOfSpecialty: [],
  currentProgram: null,
  loading: false,
};
