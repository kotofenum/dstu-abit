import { AsyncAction } from "overmind";

export const getPrograms: AsyncAction = async ({ state, effects }) => {
  state.specialties.loading = true;
  const { programs } = await effects.programs.gql.queries.programs();

  state.programs.list = programs;
  state.specialties.loading = false;
};

export const getProgramsWithSubjects: AsyncAction = async ({ state, effects }) => {
  state.programs.loading = true;
  const { programsWithSubjects } = await effects.programs.gql.queries.programsWithSubjects();

  state.programs.listWithSubjects = programsWithSubjects;
  state.programs.loading = false;
};

export const getSubjects: AsyncAction = async ({ state, effects }) => {
  const { subjects } = await effects.programs.gql.queries.subjects();

  state.programs.subjects = subjects;
};

export const getProgram: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  state.specialties.loading = true;
  const { program } = await effects.programs.gql.queries.program({
    uid,
  });

  state.programs.currentProgram = program;
  state.specialties.loading = false;
};

export const getProgramsOfSpecialty: AsyncAction<string> = async (
  { state, effects },
  specialtyId
) => {
  state.specialties.loading = true;
  const {
    programsOfSpecialty,
  } = await effects.programs.gql.queries.programsOfSpecialty({
    input: { specialtyId },
  });

  state.programs.listOfSpecialty = programsOfSpecialty;
  state.specialties.loading = false;
};
