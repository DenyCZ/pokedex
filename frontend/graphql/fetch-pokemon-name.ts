import { gql } from "@apollo/client";

export const FETCH_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
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
