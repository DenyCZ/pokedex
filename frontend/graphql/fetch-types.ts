import { gql } from "@apollo/client";

export const FETCH_TYPES = gql`
  query {
    pokemonTypes
  }
`;
