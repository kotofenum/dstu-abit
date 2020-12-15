/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SpecialtiesOfMajorInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: SpecialtiesOfMajor
// ====================================================

export interface SpecialtiesOfMajor_specialtiesOfMajor {
  uid: string;
  title: string;
  code: string;
}

export interface SpecialtiesOfMajor {
  specialtiesOfMajor: SpecialtiesOfMajor_specialtiesOfMajor[];
}

export interface SpecialtiesOfMajorVariables {
  input: SpecialtiesOfMajorInput;
}
