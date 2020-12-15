import { AsyncAction } from "overmind";

export const getMajors: AsyncAction = async ({ state, effects }) => {
  const { majors } = await effects.majors.gql.queries.majors();
  console.log(majors);

  state.majors.list = majors;
};

export const getMajor: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { major } = await effects.majors.gql.queries.major({ uid });

  state.majors.currentMajor = major;
};
