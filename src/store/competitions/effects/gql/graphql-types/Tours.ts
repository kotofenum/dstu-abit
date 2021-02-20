/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TourType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: Tours
// ====================================================

export interface Tours_tours {
  uid: string;
  title: string;
  description: string;
  videoId: string;
  type: TourType;
}

export interface Tours {
  tours: Tours_tours[];
}
