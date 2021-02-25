/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditProgramScoreInput, PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL mutation operation: EditProgramScore
// ====================================================

export interface EditProgramScore_editProgramScore_specialty_major {
  uid: string;
  title: string;
  code: string;
}

export interface EditProgramScore_editProgramScore_specialty {
  uid: string;
  title: string;
  code: string;
  major: EditProgramScore_editProgramScore_specialty_major;
}

export interface EditProgramScore_editProgramScore {
  uid: string;
  title: string;
  score: number | null;
  specialty: EditProgramScore_editProgramScore_specialty;
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

export interface EditProgramScore {
  editProgramScore: EditProgramScore_editProgramScore;
}

export interface EditProgramScoreVariables {
  input: EditProgramScoreInput;
}
