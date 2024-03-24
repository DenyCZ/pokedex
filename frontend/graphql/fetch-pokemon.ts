import { gql } from "@apollo/client";

export const FETCH_POKEMONS = gql`
  query Pokemons(
    $limit: Int = 10
    $offset: Int = 0
    $search: String
    $typeFilter: String
    $isFavoriteFilter: Boolean
  ) {
    pokemons(
      query: {
        limit: $limit
        offset: $offset
        search: $search
        filter: { type: $typeFilter, isFavorite: $isFavoriteFilter }
      }
    ) {
      edges {
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
  }
`;
