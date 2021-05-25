/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountType } from "./../../../../graphql-global-types";

// ====================================================
// GraphQL query operation: UsersWithInterests
// ====================================================

export interface UsersWithInterests_usersWithInterests_userEvents_event {
  uid: string;
  title: string;
}

export interface UsersWithInterests_usersWithInterests_userEvents {
  uid: string;
  event: UsersWithInterests_usersWithInterests_userEvents_event;
  attending: boolean;
}

export interface UsersWithInterests_usersWithInterests_majors {
  uid: string;
  title: string;
}

export interface UsersWithInterests_usersWithInterests_specialties {
  uid: string;
  title: string;
}

export interface UsersWithInterests_usersWithInterests_programs {
  uid: string;
  title: string;
}

export interface UsersWithInterests_usersWithInterests {
  uid: string;
  type: AccountType;
  lastName: string | null;
  firstName: string | null;
  patronym: string | null;
  phone: string;
  email: string | null;
  birthDate: any | null;
  country: string | null;
  locality: string | null;
  school: string | null;
  course: string | null;
  child: string | null;
  position: string | null;
  userEvents: UsersWithInterests_usersWithInterests_userEvents[];
  majors: UsersWithInterests_usersWithInterests_majors[];
  specialties: UsersWithInterests_usersWithInterests_specialties[];
  programs: UsersWithInterests_usersWithInterests_programs[];
}

export interface UsersWithInterests {
  usersWithInterests: UsersWithInterests_usersWithInterests[];
}
