import { AsyncAction } from "overmind";

export const getSpecialties: AsyncAction = async ({ state, effects }) => {
  state.specialties.loading = true;
  const { specialties } = await effects.specialties.gql.queries.specialties();

  state.specialties.list = specialties;
  state.specialties.loading = false;
};

export const getSpecialty: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  state.specialties.loading = true;
  const { specialty } = await effects.specialties.gql.queries.specialty({
    uid,
  });

  state.specialties.currentSpecialty = specialty;
  state.specialties.loading = false;
};

export const getSpecialtiesOfMajor: AsyncAction<string> = async (
  { state, effects },
  majorId
) => {
  state.specialties.loading = true;
  const {
    specialtiesOfMajor,
  } = await effects.specialties.gql.queries.specialtiesOfMajor({
    input: { majorId },
  });

  state.specialties.listOfMajor = specialtiesOfMajor;
  state.specialties.loading = false;
};
