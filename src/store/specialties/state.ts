import { Specialties_specialties } from "./effects/gql/graphql-types/Specialties";
import { SpecialtiesOfMajor_specialtiesOfMajor } from "./effects/gql/graphql-types/SpecialtiesOfMajor";
import { Specialty_specialty } from "./effects/gql/graphql-types/Specialty";

type SpecialtiesState = {
  list: Specialties_specialties[];
  listOfMajor: SpecialtiesOfMajor_specialtiesOfMajor[];
  currentSpecialty: Specialty_specialty | null;
  loading: boolean;
};

export const state: SpecialtiesState = {
  list: [],
  listOfMajor: [],
  currentSpecialty: null,
  loading: false,
};
