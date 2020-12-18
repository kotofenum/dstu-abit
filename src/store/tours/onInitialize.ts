import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = ({ effects, state }) => {
  const token = localStorage.getItem("token");
  if (token) {
    state.auth.token = token;
  }

  effects.tours.gql.initialize(
    {
      endpoint: `${process.env.REACT_APP_API_URL}/graphql`,
      headers: () => ({
        authorization: `Bearer ${state.auth.token || token}`,
      }),
    },
    {
      endpoint: `${process.env.REACT_APP_API_URL}/graphqlll`,
      params: () => ({
        token: state.auth.token || token || '',
      }),
    }
  );
};
