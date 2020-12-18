import { Tours } from './graphql-types/Tours';
import { gql, Query } from "overmind-graphql";

export const tours: Query<Tours> = gql`
  query Tours {
    tours {
      uid
      title
      description
      videoId
      type
    }
  }
`;
