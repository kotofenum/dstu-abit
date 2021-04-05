import { EventsOfUser_eventsOfUser } from "./effects/gql/graphql-types/EventsOfUser";
import { TagsOfUser_tagsOfUser } from "./effects/gql/graphql-types/TagsOfUser";
import { User_user } from "./effects/gql/graphql-types/User";
import { Users_users } from "./effects/gql/graphql-types/Users";

type AdminState = {
  users: Users_users[];
  currentUser: User_user | null;
  eventsOfUser: EventsOfUser_eventsOfUser[];
  tagsOfUser: TagsOfUser_tagsOfUser | null;
};

export const state: AdminState = {
  users: [],
  currentUser: null,
  eventsOfUser: [],
  tagsOfUser: null
};
