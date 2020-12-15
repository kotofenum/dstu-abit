/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Specialties
// ====================================================

export interface Specialties_specialties_major {
  uid: string;
  title: string;
  code: string;
  fundedPlaces: number;
}

export interface Specialties_specialties {
  uid: string;
  title: string;
  code: string;
  major: Specialties_specialties_major;
}

export interface Specialties {
  specialties: Specialties_specialties[];
}
