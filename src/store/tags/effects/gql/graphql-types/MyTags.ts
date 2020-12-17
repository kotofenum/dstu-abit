/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: MyTags
// ====================================================

export interface MyTags_myUserTags_majors {
  uid: string;
  title: string;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
}

export interface MyTags_myUserTags_specialties {
  uid: string;
  title: string;
  code: string;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
}

export interface MyTags_myUserTags_programs {
  uid: string;
  title: string;
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

export interface MyTags_myUserTags {
  majors: MyTags_myUserTags_majors[];
  specialties: MyTags_myUserTags_specialties[];
  programs: MyTags_myUserTags_programs[];
}

export interface MyTags {
  myUserTags: MyTags_myUserTags;
}
