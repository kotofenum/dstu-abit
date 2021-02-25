/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditProgramInput, PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditProgram
// ====================================================

export interface EditProgram_editProgram_specialty_major {
  uid: string;
  title: string;
  code: string;
}

export interface EditProgram_editProgram_specialty {
  uid: string;
  title: string;
  code: string;
  major: EditProgram_editProgram_specialty_major;
}

export interface EditProgram_editProgram {
  uid: string;
  title: string;
  score: number | null;
  specialty: EditProgram_editProgram_specialty;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
  fullTimeForm: boolean;
  mixedForm: boolean;
  extramuralForm: boolean;
  degree: ProgramDegree;
  studyPeriod: string;
  languages: string;
  description: string | null;
  advantages: string | null;
  partners: string | null;
  projectsAndPractices: string | null;
  leadProfessors: string | null;
  graduates: string | null;
  unit: string | null;
  supervisor: string | null;
}

export interface EditProgram {
  editProgram: EditProgram_editProgram;
}

export interface EditProgramVariables {
  input: EditProgramInput;
}
