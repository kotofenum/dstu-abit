import { AsyncAction } from "overmind";
import { EditGuidanceInput, GuidanceInput } from "../graphql-global-types";
import { AddGuidance_addGuidance } from "./effects/gql/graphql-types/AddGuidance";
import { EditGuidance_editGuidance } from "./effects/gql/graphql-types/EditGuidance";

export const getGuidances: AsyncAction = async ({ state, effects }) => {
  const { guidances } = await effects.guidance.gql.queries.guidances();

  state.guidance.guidances = guidances;
};

export const getGuidance: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { guidance } = await effects.guidance.gql.queries.guidance({ uid });

  state.guidance.currentGuidance = guidance;
};

export const addGuidance: AsyncAction<
  GuidanceInput,
  AddGuidance_addGuidance
> = async ({ effects }, input) => {
  const { addGuidance } = await effects.guidance.gql.mutations.addGuidance({
    input,
  });

  return addGuidance;
};

export const editGuidance: AsyncAction<
  EditGuidanceInput,
  EditGuidance_editGuidance
> = async ({ effects }, input) => {
  const { editGuidance } = await effects.guidance.gql.mutations.editGuidance({
    input,
  });

  return editGuidance;
};
