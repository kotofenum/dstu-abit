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
  effects.events.gql.initialize(
    {
      // query and mutation options
      endpoint: `${process.env.REACT_APP_API_URL}/graphql`,
      headers: () => ({
        authorization: `Bearer ${
          token ||
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhnLWVyZ1B2cldYdXRUQldJaU5IRSJ9.eyJnaXZlbl9uYW1lIjoiQWxleGFuZGVyIiwiZmFtaWx5X25hbWUiOiJLaHJpc3RvIiwibmlja25hbWUiOiJrb3RvZmVudW0iLCJuYW1lIjoiQWxleGFuZGVyIEtocmlzdG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1sdE52NnFsRWlmdy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNtWGF3YWtVbFhtZ3JPWjNYc3R6ZVhoLU01dWNRL3M5Ni1jL3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMjAtMTEtMDRUMjA6MjU6MjUuOTYyWiIsImVtYWlsIjoia290b2ZlbnVtQG9uZXNwYWNlLmNvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY29uc3RhZml0LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDM3ODc2ODI4MTU2MTk0Mzc3NSIsImF1ZCI6Im1ReG1iMVhwUmtuQkJHUWFpeE0zVWk4UzRNdW5ETDkyIiwiaWF0IjoxNjA0NTIxNTI2LCJleHAiOjE2MDQ1NTc1MjYsIm5vbmNlIjoiWlZwRlNWRnVVamxZWmxWUVgwTXhjakZ2T0V0MGN6UlFSelY2ZW1sU1NVbEVTVWh5VEVGTk1GWlVXUT09In0.OVZAMH9J8hg140K8EyJHs9gQmdJvrQHnEf_X8uP0XEt_TiyIMV8XdfHwZmqO376_FBORZs3NpEznVkdEQcln-SnUm4vddYm0KK6t0Yhvmbzgh_TyBC2ZxTSiSKcgrV49uODXnRNaBeZOdl61cnyKVoy7PRj2gX_jKFRTykoi3Dgq2Oh5OtQ0lMt_e9dhOp1dXNSCDYQBn1Eq2XFASAKK7e-Odh4g7bHq1q-NVi3_B517mj112CCytny7iRw8aOlvxua8UoGSJVDXLVwkEwo_ILg7A3_tyr1IcgLiFCnCO_UAAt_wGXr7QcqlZ9zPsgbyPsWVczWr3YqF_Oxcpjva1Q"
        }`,
      }),
    },
    {
      // subscription options
      endpoint: `${process.env.REACT_APP_API_URL}/graphqlll`,
      params: () => ({
        token:
          token ||
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImhnLWVyZ1B2cldYdXRUQldJaU5IRSJ9.eyJnaXZlbl9uYW1lIjoiQWxleGFuZGVyIiwiZmFtaWx5X25hbWUiOiJLaHJpc3RvIiwibmlja25hbWUiOiJrb3RvZmVudW0iLCJuYW1lIjoiQWxleGFuZGVyIEtocmlzdG8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1sdE52NnFsRWlmdy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNtWGF3YWtVbFhtZ3JPWjNYc3R6ZVhoLU01dWNRL3M5Ni1jL3Bob3RvLmpwZyIsImxvY2FsZSI6ImVuIiwidXBkYXRlZF9hdCI6IjIwMjAtMTEtMDRUMjA6MjU6MjUuOTYyWiIsImVtYWlsIjoia290b2ZlbnVtQG9uZXNwYWNlLmNvIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vY29uc3RhZml0LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNDM3ODc2ODI4MTU2MTk0Mzc3NSIsImF1ZCI6Im1ReG1iMVhwUmtuQkJHUWFpeE0zVWk4UzRNdW5ETDkyIiwiaWF0IjoxNjA0NTIxNTI2LCJleHAiOjE2MDQ1NTc1MjYsIm5vbmNlIjoiWlZwRlNWRnVVamxZWmxWUVgwTXhjakZ2T0V0MGN6UlFSelY2ZW1sU1NVbEVTVWh5VEVGTk1GWlVXUT09In0.OVZAMH9J8hg140K8EyJHs9gQmdJvrQHnEf_X8uP0XEt_TiyIMV8XdfHwZmqO376_FBORZs3NpEznVkdEQcln-SnUm4vddYm0KK6t0Yhvmbzgh_TyBC2ZxTSiSKcgrV49uODXnRNaBeZOdl61cnyKVoy7PRj2gX_jKFRTykoi3Dgq2Oh5OtQ0lMt_e9dhOp1dXNSCDYQBn1Eq2XFASAKK7e-Odh4g7bHq1q-NVi3_B517mj112CCytny7iRw8aOlvxua8UoGSJVDXLVwkEwo_ILg7A3_tyr1IcgLiFCnCO_UAAt_wGXr7QcqlZ9zPsgbyPsWVczWr3YqF_Oxcpjva1Q",
      }),
    }
  );
};
