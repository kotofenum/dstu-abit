import { AsyncAction } from "overmind";
import {
  CodeInput,
  LoginInput,
  UpdateUserInput,
} from "../graphql-global-types";

export const sendCode: AsyncAction<CodeInput> = async (
  { state, effects },
  input
) => {
  const resp = await effects.auth.gql.mutations.sendCode({ input });
  console.log(resp);

  state.auth.code = resp.sendCode.code;
};

export const confirmCode: AsyncAction<{ phone: string; code: string }> = async (
  { state, effects },
  { phone, code }
) => {
  const resp = await effects.auth.gql.mutations.confirmCode({
    input: { phone, code },
  });
  console.log(resp);

  // state.majors.list = majors;
  if (resp.confirmCode.access_token) {
    state.auth.token = resp.confirmCode.access_token;
    localStorage.setItem("token", resp.confirmCode.access_token);
  } else {
    throw new Error("Неверный код");
  }
};

export const updateUser: AsyncAction<UpdateUserInput> = async (
  { actions, effects },
  data
) => {
  const resp = await effects.auth.gql.mutations.updateUser({
    input: data,
  });

  await actions.auth.getMe();
  console.log(resp);

  // state.majors.list = majors;
  // state.auth.token = resp.confirmCode.access_token;
};

export const login: AsyncAction<LoginInput> = async (
  { state, effects },
  { phone, password }
) => {
  const resp = await effects.auth.gql.mutations.login({
    input: { phone, password },
  });
  console.log(resp);

  // state.majors.list = majors;
  if (resp.login.access_token) {
    state.auth.token = resp.login.access_token;
    localStorage.setItem("token", resp.login.access_token);
  } else {
    throw new Error("Неверный код");
  }
};

export const logout: AsyncAction = async ({ state, effects }) => {
  localStorage.removeItem("token");
  state.auth.token = null;
};

export const getMe: AsyncAction = async ({ state, effects }) => {
  const resp = await effects.auth.gql.queries.me();
  console.log(resp);

  state.auth.user = resp.me

  if (resp.me.lastName && resp.me.firstName) {
    state.auth.username = resp.me.lastName + " " + resp.me.firstName;
  }
};
