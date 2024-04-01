"use server";

import {FETCH_POKEMONS} from "@/graphql/fetch-pokemons";
import {getClient} from "@/lib/client";
import {ApolloQueryResult} from "@apollo/client";
import {Pokemon} from "@/interface/pokemon";

export default async function fetchPokemons(): Promise<ApolloQueryResult<Pokemon[]>> {
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
