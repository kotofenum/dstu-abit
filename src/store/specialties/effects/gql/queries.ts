import { gql, Query } from "overmind-graphql";
import { Specialties } from "./graphql-types/Specialties";
import { SpecialtiesOfMajor, SpecialtiesOfMajorVariables } from "./graphql-types/SpecialtiesOfMajor";
import { Specialty } from "./graphql-types/Specialty";

export const specialties: Query<Specialties> = gql`
  query Specialties {
    specialties {
      uid
      title
      code
      major {
        uid
        title
        code
        fundedPlaces
      }
    }
  }
`;

export const specialty: Query<Specialty, { uid: string }> = gql`
  query Specialty($uid: ID!) {
    specialty(uid: $uid) {
      uid
      title
      code
      major {
        uid
        title
        code
        fundedPlaces
      }
    }
  }
`;

export const specialtiesOfMajor: Query<SpecialtiesOfMajor, SpecialtiesOfMajorVariables> = gql`
  query SpecialtiesOfMajor($input: SpecialtiesOfMajorInput!) {
    specialtiesOfMajor(input: $input) {
      uid
      title
      code
    }
  }
`;
