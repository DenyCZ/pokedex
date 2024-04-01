"use server";

import { FETCH_POKEMONS } from "@/graphql/fetch-pokemons";
import { getClient } from "@/lib/client";
import { ApolloQueryResult } from "@apollo/client";
import { PokemonConnection } from "@/interface/pokemon";

type PokemonData = {
  pokemons: PokemonConnection;
};

export default async function fetchPokemons(): Promise<
  ApolloQueryResult<PokemonData>
> {
  return await getClient().query({
    query: FETCH_POKEMONS,
    variables: {
      limit: 1000,
      offset: 0,
      search: "",
      typyFilter: "",
      isFavoriteFilter: false,
    },
  });
}
