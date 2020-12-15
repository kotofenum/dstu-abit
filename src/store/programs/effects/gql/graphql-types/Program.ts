/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Program
// ====================================================

export interface Program_program_specialty_major {
  uid: string;
  title: string;
  code: string;
  fundedPlaces: number;
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
  attendance: boolean;
  degree: string;
  studyPeriod: number;
  languages: string;
  description: string;
  specialty: Program_program_specialty;
}

export interface Program {
  program: Program_program;
}

export interface ProgramVariables {
  uid: string;
}
