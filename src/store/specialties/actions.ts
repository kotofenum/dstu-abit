import { AsyncAction } from "overmind";

export const getSpecialties: AsyncAction = async ({ state, effects }) => {
  const { specialties } = await effects.specialties.gql.queries.specialties();

  state.specialties.list = specialties;
};

export const getSpecialty: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { specialty } = await effects.specialties.gql.queries.specialty({
    uid,
  });

  state.specialties.currentSpecialty = specialty;
};

export const getSpecialtiesOfMajor: AsyncAction<string> = async (
  { state, effects },
  majorId
) => {
  const {
    specialtiesOfMajor,
  } = await effects.specialties.gql.queries.specialtiesOfMajor({
    input: { majorId },
  });

  state.specialties.listOfMajor = specialtiesOfMajor;
};
