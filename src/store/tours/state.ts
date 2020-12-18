import { Tours_tours } from "./effects/gql/graphql-types/Tours";

type ToursState = {
  inhouse: Tours_tours[];
  partners: Tours_tours[];
};

export const state: ToursState = {
  inhouse: [],
  partners: [],
};
