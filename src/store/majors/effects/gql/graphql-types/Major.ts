/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PlacesMeta } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Major
// ====================================================

export interface Major_major {
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

export interface Major {
  major: Major_major;
}

export interface MajorVariables {
  uid: string;
}
