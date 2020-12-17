/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Programs
// ====================================================

export interface Programs_programs_specialty_major {
  uid: string;
  title: string;
  code: string;
}

export interface Programs_programs_specialty {
  uid: string;
  title: string;
  code: string;
  major: Programs_programs_specialty_major;
}

export interface Programs_programs {
  uid: string;
  title: string;
  specialty: Programs_programs_specialty;
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

export interface Programs {
  programs: Programs_programs[];
}
