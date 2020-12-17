/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Specialties
// ====================================================

export interface Specialties_specialties_major {
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

export interface Specialties_specialties {
  uid: string;
  title: string;
  code: string;
  major: Specialties_specialties_major;
  fullTimePlaces: number | null;
  fullTimeMeta: PlacesMeta | null;
  mixedPlaces: number | null;
  mixedMeta: PlacesMeta | null;
  extramuralPlaces: number | null;
  extramuralMeta: PlacesMeta | null;
}

export interface Specialties {
  specialties: Specialties_specialties[];
}
