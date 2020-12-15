import { Major_major } from "./effects/gql/graphql-types/Major";
import { Majors_majors } from "./effects/gql/graphql-types/Majors";

type MajorsState = {
  list: Majors_majors[];
  currentMajor: Major_major | null;
};

export const state: MajorsState = {
  list: [],
  currentMajor: null,
};
