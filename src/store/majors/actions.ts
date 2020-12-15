import { AsyncAction } from "overmind";

export const getMajors: AsyncAction = async ({ state, effects }) => {
  state.specialties.loading = true;
  const { majors } = await effects.majors.gql.queries.majors();
  console.log(majors);

  state.majors.list = majors;
  state.specialties.loading = false;
};

export const getMajor: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  state.specialties.loading = true;
  const { major } = await effects.majors.gql.queries.major({ uid });

  state.majors.currentMajor = major;
  state.specialties.loading = false;
};
