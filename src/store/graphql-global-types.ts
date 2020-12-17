/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AccountType {
  enrolee = "enrolee",
  parent = "parent",
  teacher = "teacher",
}

export enum EventType {
  consultation = "consultation",
  discussion = "discussion",
  lecture = "lecture",
  masterClass = "masterClass",
  meeting = "meeting",
  olympiad = "olympiad",
  presentation = "presentation",
  presentationQuiz = "presentationQuiz",
  quiz = "quiz",
  roomToor = "roomToor",
  roundTable = "roundTable",
  tour = "tour",
  video = "video",
  webinar = "webinar",
  workshop = "workshop",
}

export enum ModuleType {
  admissionsCampaign = "admissionsCampaign",
  dstuOnline = "dstuOnline",
  helloFaculty = "helloFaculty",
  preUniversity = "preUniversity",
  sportLeisureMore = "sportLeisureMore",
  talents = "talents",
}

export enum PlacesMeta {
  hasDegree = "hasDegree",
  secondaryMajor = "secondaryMajor",
  shortTerm = "shortTerm",
  undeveloped = "undeveloped",
  unknown = "unknown",
  unobtainable = "unobtainable",
}

export enum ProgramDegree {
  bachelor = "bachelor",
  certified = "certified",
  master = "master",
}

export interface CodeInput {
  phone: string;
  type: AccountType;
}

export interface ConfirmCodeInput {
  phone: string;
  code: string;
}

export interface LoginInput {
  phone: string;
  password: string;
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
