import { graphql } from "overmind-graphql";
import * as mutations from "./mutations";

export const gql = graphql({
  mutations,
});
