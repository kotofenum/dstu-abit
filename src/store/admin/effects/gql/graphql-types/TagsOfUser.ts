/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta, ProgramDegree } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: TagsOfUser
// ====================================================

export interface TagsOfUser_tagsOfUser_majors {
  uid: string;
  title: string;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
}

export interface TagsOfUser_tagsOfUser_specialties {
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

export interface TagsOfUser_tagsOfUser_programs {
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

export interface TagsOfUser_tagsOfUser {
  majors: TagsOfUser_tagsOfUser_majors[];
  specialties: TagsOfUser_tagsOfUser_specialties[];
  programs: TagsOfUser_tagsOfUser_programs[];
}

export interface TagsOfUser {
  tagsOfUser: TagsOfUser_tagsOfUser;
}

export interface TagsOfUserVariables {
  uid: string;
}
