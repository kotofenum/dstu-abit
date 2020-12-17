/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Specialty
// ====================================================

export interface Specialty_specialty_major {
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

export interface Specialty_specialty {
  uid: string;
  title: string;
  code: string;
  major: Specialty_specialty_major;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
}

export interface Specialty {
  specialty: Specialty_specialty;
}

export interface SpecialtyVariables {
  uid: string;
}
