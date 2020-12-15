/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MyTags
// ====================================================

export interface MyTags_myUserTags_majors {
  uid: string;
  title: string;
  code: string;
  fundedPlaces: number;
}

export interface MyTags_myUserTags_specialties {
  uid: string;
  title: string;
  code: string;
}

export interface MyTags_myUserTags_programs {
  uid: string;
  title: string;
  attendance: boolean;
  degree: string;
  studyPeriod: number;
  languages: string;
}

export interface MyTags_myUserTags {
  majors: MyTags_myUserTags_majors[];
  specialties: MyTags_myUserTags_specialties[];
  programs: MyTags_myUserTags_programs[];
}

export interface MyTags {
  myUserTags: MyTags_myUserTags;
}
