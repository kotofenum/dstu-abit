import { Guidance_guidance } from "./effects/gql/graphql-types/Guidance";
import { Guidances_guidances } from "./effects/gql/graphql-types/Guidances";

type GuidanceState = {
  guidances: Guidances_guidances[];
  currentGuidance: Guidance_guidance | null;
};

export const state: GuidanceState = {
  guidances: [],
  currentGuidance: null,
};
