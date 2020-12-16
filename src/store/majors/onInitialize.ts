import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = ({ effects, state }) => {
  const token = localStorage.getItem("token");
  if (token) {
    state.auth.token = token;
  }

  effects.majors.gql.initialize(
    {
      // query and mutation options
      endpoint: `${process.env.REACT_APP_API_URL}/graphql`,
      headers: () => ({
        authorization: `Bearer ${state.auth.token || token}`,
      }),
    },
    {
      // subscription options
      endpoint: `${process.env.REACT_APP_API_URL}/graphqlll`,
      params: () => ({
        token:
          token ||
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijg5ODg5OTMyMzIxIiwic3ViIjoiOWY0N2FkYjYtNzY4Zi00ZjkyLWFhNTItZDFiYzVhNjRmMjBkIiwiaWF0IjoxNjA4MDEyNDE3LCJleHAiOjE2MDg2MTcyMTd9.W_cNY2F6JusC_9wzvEXYiBnGwmi5_6upl65kO_E05aQ",
      }),
    }
  );
};
