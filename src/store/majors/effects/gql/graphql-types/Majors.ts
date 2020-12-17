/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Majors
// ====================================================

export interface Majors_majors {
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

export interface Majors {
  majors: Majors_majors[];
}
