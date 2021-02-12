import { Program_program } from "./effects/gql/graphql-types/Program";
import { Programs_programs } from "./effects/gql/graphql-types/Programs";
import { ProgramsOfSpecialty_programsOfSpecialty } from "./effects/gql/graphql-types/ProgramsOfSpecialty";
import { ProgramsWithSubjects_programsWithSubjects } from "./effects/gql/graphql-types/ProgramsWithSubjects";
import { Subjects_subjects } from "./effects/gql/graphql-types/Subjects";

type ProgramsState = {
  list: Programs_programs[];
  listWithSubjects: ProgramsWithSubjects_programsWithSubjects[]
  listOfSpecialty: ProgramsOfSpecialty_programsOfSpecialty[];
  subjects: Subjects_subjects[],
  currentProgram: Program_program | null;
  loading: boolean;
};

export const state: ProgramsState = {
  list: [],
  listWithSubjects: [],
  listOfSpecialty: [],
  subjects: [],
  currentProgram: null,
  loading: false,
};
