/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProgramsOfSpecialtyInput } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: ProgramsOfSpecialty
// ====================================================

export interface ProgramsOfSpecialty_programsOfSpecialty {
  uid: string;
  title: string;
}

export interface ProgramsOfSpecialty {
  programsOfSpecialty: ProgramsOfSpecialty_programsOfSpecialty[];
}

export interface ProgramsOfSpecialtyVariables {
  input: ProgramsOfSpecialtyInput;
}
