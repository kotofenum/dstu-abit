/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Specialty
// ====================================================

export interface Specialty_specialty_major {
  uid: string;
  title: string;
  code: string;
  fundedPlaces: number;
}

export interface Specialty_specialty {
  uid: string;
  title: string;
  code: string;
  major: Specialty_specialty_major;
}

export interface Specialty {
  specialty: Specialty_specialty;
}

export interface SpecialtyVariables {
  uid: string;
}
