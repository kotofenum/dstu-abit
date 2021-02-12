/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProgramsWithSubjects
// ====================================================

export interface ProgramsWithSubjects_programsWithSubjects_subjects_subject {
  uid: string;
  title: string;
}

export interface ProgramsWithSubjects_programsWithSubjects_subjects {
  uid: string;
  required: boolean;
  score: number;
  subject: ProgramsWithSubjects_programsWithSubjects_subjects_subject;
}

export interface ProgramsWithSubjects_programsWithSubjects {
  uid: string;
  title: string;
  fullTimeForm: boolean;
  mixedForm: boolean;
  extramuralForm: boolean;
  subjects: ProgramsWithSubjects_programsWithSubjects_subjects[];
}

export interface ProgramsWithSubjects {
  programsWithSubjects: ProgramsWithSubjects_programsWithSubjects[];
}
