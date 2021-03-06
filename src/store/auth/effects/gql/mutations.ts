import { EditUser, EditUserVariables } from "./graphql-types/EditUser";
import { gql, Query } from "overmind-graphql";
import { ConfirmCode, ConfirmCodeVariables } from "./graphql-types/ConfirmCode";
import { Login, LoginVariables } from "./graphql-types/Login";
import { SendCode, SendCodeVariables } from "./graphql-types/SendCode";
import { UpdateUser, UpdateUserVariables } from "./graphql-types/UpdateUser";

export const sendCode: Query<SendCode, SendCodeVariables> = gql`
  mutation SendCode($input: CodeInput!) {
    sendCode(input: $input) {
      uid
      code
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
      type
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

export const editUser: Query<EditUser, EditUserVariables> = gql`
  mutation EditUser($input: EditUserInput!) {
    editUser(input: $input) {
      uid
      firstName
      lastName
      patronym
      type
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

export const login: Query<Login, LoginVariables> = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      access_token
    }
  }
`;
