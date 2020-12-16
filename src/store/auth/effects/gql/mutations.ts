import { gql, Query } from "overmind-graphql";
import { ConfirmCode, ConfirmCodeVariables } from "./graphql-types/ConfirmCode";
import { SendCode, SendCodeVariables } from "./graphql-types/SendCode";
import { UpdateUser, UpdateUserVariables } from "./graphql-types/UpdateUser";

export const sendCode: Query<SendCode, SendCodeVariables> = gql`
  mutation SendCode($input: CodeInput!) {
    sendCode(input: $input) {
      uid
      phone
      expireAt
      issuer {
        uid
        firstName
        lastName
      }
    }
  }
`;

export const confirmCode: Query<ConfirmCode, ConfirmCodeVariables> = gql`
  mutation ConfirmCode($input: ConfirmCodeInput!) {
    confirmCode(input: $input) {
      access_token
    }
  }
`;

export const updateUser: Query<UpdateUser, UpdateUserVariables> = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
      uid
      firstName
      lastName
      patronym
      birthDate
      country
      locality
      email
      pwd
      school
      position
      child
      course
    }
  }
`;
