"use server";

import { FETCH_POKEMONS } from "@/graphql/fetch-pokemons";
import { getClient } from "@/lib/client";

export default async function fetchPokemons() {
  const data = await getClient().query({
    query: FETCH_POKEMONS,
    variables: {
      limit: 1000,
      offset: 0,
      search: "",
      typyFilter: "",
      isFavoriteFilter: false,
    },
  });

  return data;
}
