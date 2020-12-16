/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CodeInput {
  phone: string;
}

export interface ConfirmCodeInput {
  phone: string;
  code: string;
}

export interface JoinEventInput {
  eventId: string;
}

export interface ProgramsOfSpecialtyInput {
  specialtyId: string;
}

export interface SpecialtiesOfMajorInput {
  majorId: string;
}

export interface UpdateUserInput {
  firstName: string;
  lastName: string;
  patronym: string;
  birthDate: any;
  country: string;
  locality: string;
  email: string;
  pwd: string;
  school?: string | null;
  position?: string | null;
  child?: string | null;
  course?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
