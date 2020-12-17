/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Program
// ====================================================

export interface Program_program_specialty_major {
  uid: string;
  title: string;
  code: string;
}

export interface Program_program_specialty {
  uid: string;
  title: string;
  code: string;
  major: Program_program_specialty_major;
}

export interface Program_program {
  uid: string;
  title: string;
  specialty: Program_program_specialty;
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

export interface Program {
  program: Program_program;
}

export interface ProgramVariables {
  uid: string;
}
