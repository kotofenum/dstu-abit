/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Programs
// ====================================================

export interface Programs_programs_specialty_major {
  uid: string;
  title: string;
  code: string;
  fundedPlaces: number;
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
  attendance: boolean;
  degree: string;
  studyPeriod: number;
  languages: string;
  description: string;
  specialty: Programs_programs_specialty;
}

export interface Programs {
  programs: Programs_programs[];
}
