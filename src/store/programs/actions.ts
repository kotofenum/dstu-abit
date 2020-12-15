import { AsyncAction } from "overmind";

export const getPrograms: AsyncAction = async ({ state, effects }) => {
  const { programs } = await effects.programs.gql.queries.programs();

  state.programs.list = programs;
};

export const getProgram: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { program } = await effects.programs.gql.queries.program({
    uid,
  });

  state.programs.currentProgram = program;
};

export const getProgramsOfSpecialty: AsyncAction<string> = async (
  { state, effects },
  specialtyId
) => {
  const {
    programsOfSpecialty,
  } = await effects.programs.gql.queries.programsOfSpecialty({
    input: { specialtyId },
  });

  state.programs.listOfSpecialty = programsOfSpecialty;
};
