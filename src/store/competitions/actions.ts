import { AsyncAction } from "overmind";
import {
  EditCompetitionInput,
  CompetitionInput,
} from "../graphql-global-types";
import { AddCompetition_addCompetition } from "./effects/gql/graphql-types/AddCompetition";
import { EditCompetition_editCompetition } from "./effects/gql/graphql-types/EditCompetition";

export const getCompetitions: AsyncAction = async ({ state, effects }) => {
  const {
    competitions,
  } = await effects.competitions.gql.queries.competitions();

  state.competitions.competitions = competitions;
};

export const getCompetition: AsyncAction<string> = async (
  { state, effects },
  uid
) => {
  const { competition } = await effects.competitions.gql.queries.competition({
    uid,
  });

  state.competitions.currentCompetition = competition;
};

export const addCompetition: AsyncAction<
  CompetitionInput,
  AddCompetition_addCompetition
> = async ({ effects }, input) => {
  const {
    addCompetition,
  } = await effects.competitions.gql.mutations.addCompetition({
    input,
  });

  return addCompetition;
};

export const editCompetition: AsyncAction<
  EditCompetitionInput,
  EditCompetition_editCompetition
> = async ({ effects }, input) => {
  const {
    editCompetition,
  } = await effects.competitions.gql.mutations.editCompetition({
    input,
  });

  return editCompetition;
};
