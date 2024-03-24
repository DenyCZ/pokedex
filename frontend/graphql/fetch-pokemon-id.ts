import { gql } from "@apollo/client";

export const FETCH_POKEMON_BY_ID = gql`
  query GetPokemonById($id: ID!) {
    pokemonById(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      weaknesses
      fleeRate
      maxCP
      evolutions {
        id
        number
        name
      }
      evolutionRequirements {
        amount
        name
      }
      maxHP
      image
      sound
      isFavorite
    }
  }
`;
