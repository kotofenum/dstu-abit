/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Guidance
// ====================================================

export interface Guidance_guidance {
  uid: string;
  title: string;
  date: string;
  description: string;
  link: string | null;
}

export interface Guidance {
  guidance: Guidance_guidance;
}

export interface GuidanceVariables {
  uid: string;
}
