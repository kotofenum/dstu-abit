import { Competition_competition } from "./effects/gql/graphql-types/Competition";
import { Competitions_competitions } from "./effects/gql/graphql-types/Competitions";

type CompetitionState = {
  competitions: Competitions_competitions[];
  currentCompetition: Competition_competition | null;
};

export const state: CompetitionState = {
  competitions: [],
  currentCompetition: null,
};
