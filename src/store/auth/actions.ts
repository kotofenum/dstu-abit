import { AsyncAction } from "overmind";
import { UpdateUserInput } from "../graphql-global-types";

export const sendCode: AsyncAction<string> = async (
  { state, effects },
  phone
) => {
  const resp = await effects.auth.gql.mutations.sendCode({ input: { phone } });
  console.log(resp);

  // state.majors.list = majors;
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
  { state, effects },
  data
) => {
  const resp = await effects.auth.gql.mutations.updateUser({
    input: data,
  });
  console.log(resp);

  // state.majors.list = majors;
  // state.auth.token = resp.confirmCode.access_token;
};

// export const getMajor: AsyncAction<string> = async (
//   { state, effects },
//   uid
// ) => {
//   state.specialties.loading = true;
//   const { major } = await effects.majors.gql.queries.major({ uid });

//   state.majors.currentMajor = major;
//   state.specialties.loading = false;
// };
