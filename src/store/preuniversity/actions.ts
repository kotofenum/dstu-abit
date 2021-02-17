import { PreuniversityRequestInput } from "./../graphql-global-types";
import { AsyncAction } from "overmind";

export const preuniversityRequest: AsyncAction<PreuniversityRequestInput> = async (
  { effects },
  input
) => {
  await effects.preuniversity.gql.mutations.addPreuniversityRequest({ input });
};
