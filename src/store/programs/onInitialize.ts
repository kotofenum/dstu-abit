import { OnInitialize } from "overmind";

export const onInitialize: OnInitialize = ({ effects }) => {
  const userData = localStorage.getItem(
    "@@auth0spajs@@::mQxmb1XpRknBBGQaixM3Ui8S4MunDL92::default::openid profile email"
  );
  let token: string | null = null;
  console.log("userData: ", userData);
  if (userData) {
    token = JSON.parse(userData)["body"]["id_token"];
  }
  effects.programs.gql.initialize(
    {
      // query and mutation options
      endpoint: `${process.env.REACT_APP_API_URL}/graphql`,
      headers: () => ({
        authorization: `Bearer ${
          token ||
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ijg5ODg5OTMyMzIxIiwic3ViIjoiOWY0N2FkYjYtNzY4Zi00ZjkyLWFhNTItZDFiYzVhNjRmMjBkIiwiaWF0IjoxNjA4MDEyNDE3LCJleHAiOjE2MDg2MTcyMTd9.W_cNY2F6JusC_9wzvEXYiBnGwmi5_6upl65kO_E05aQ"
        }`,
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
