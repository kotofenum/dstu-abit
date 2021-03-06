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

export enum CompetitionGroup {
  april = "april",
  february = "february",
  january = "january",
  march = "march",
  may = "may",
  other = "other",
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
  futureTour = "futureTour",
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

export enum TagRelationType {
  major = "major",
  program = "program",
  specialty = "specialty",
}

export enum TourType {
  inhouse = "inhouse",
  partner = "partner",
}

export interface CodeInput {
  phone: string;
  type: AccountType;
}

export interface CompetitionInput {
  title: string;
  date: string;
  target: string;
  link?: string | null;
  group: CompetitionGroup;
}

export interface ConfirmCodeInput {
  phone: string;
  code: string;
}

export interface EditCompetitionInput {
  uid: string;
  title: string;
  date: string;
  target: string;
  link?: string | null;
  group: CompetitionGroup;
}

export interface EditEventInput {
  title: string;
  description?: string | null;
  type: EventType;
  module: ModuleType;
  faculty?: string | null;
  link?: string | null;
  reward?: number | null;
  limit?: number | null;
  placesLeft?: number | null;
  startsAt: any;
  endsAt: any;
  eventId: string;
}

export interface EditGuidanceInput {
  uid: string;
  title: string;
  date: string;
  description: string;
  link?: string | null;
}

export interface EditProgramInput {
  title: string;
  score?: number | null;
  specialtyId: string;
  fullTimePlaces?: number | null;
  fullTimeMeta?: PlacesMeta | null;
  mixedPlaces?: number | null;
  mixedMeta?: PlacesMeta | null;
  extramuralPlaces?: number | null;
  extramuralMeta?: PlacesMeta | null;
  fullTimeForm: boolean;
  mixedForm: boolean;
  extramuralForm: boolean;
  degree: ProgramDegree;
  studyPeriod: string;
  languages: string;
  description?: string | null;
  advantages?: string | null;
  partners?: string | null;
  projectsAndPractices?: string | null;
  leadProfessors?: string | null;
  graduates?: string | null;
  unit?: string | null;
  supervisor?: string | null;
  uid: string;
}

export interface EditProgramScoreInput {
  uid: string;
  score: number;
}

export interface EditUserInput {
  country?: string | null;
  locality?: string | null;
  birthDate?: any | null;
  school?: string | null;
  email?: string | null;
  position?: string | null;
  child?: string | null;
  course?: string | null;
}

export interface EventInput {
  title: string;
  description?: string | null;
  type: EventType;
  module: ModuleType;
  faculty?: string | null;
  link?: string | null;
  reward?: number | null;
  limit?: number | null;
  placesLeft?: number | null;
  startsAt: any;
  endsAt: any;
}

export interface GuidanceInput {
  title: string;
  date: string;
  description: string;
  link?: string | null;
}

export interface LoginInput {
  phone: string;
  password: string;
}

export interface ModuleEventsInput {
  module: ModuleType;
}

export interface PreuniversityRequestInput {
  category: string;
  subcategory?: string | null;
  program: string;
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

export interface UserEventInput {
  eventId: string;
}

export interface UserTagInput {
  relationId: string;
  relationType: TagRelationType;
}

export interface VisitInput {
  eventId: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
