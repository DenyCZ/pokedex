"use client";
import { useSuspenseQuery } from "@apollo/client";

import { Header } from "@/components/header";
import { DataView } from "@/components/views/data";
import { PokemonCard } from "@/components/pokemon-card";

import { Pokemon, PokemonConnection } from "@/interface/pokemon";
import { FETCH_POKEMONS } from "@/graphql/fetch-pokemons";

import { usePokemonStore } from "@/stores/pokemon";

export default function MainPage() {
  const { limit, offset, search, filterOptions } = usePokemonStore();

  const { data } = useSuspenseQuery<{ pokemons: PokemonConnection }>(
    FETCH_POKEMONS,
    {
      variables: {
        limit,
        offset,
        search,
        typeFilter: filterOptions.type,
        isFavoriteFilter: filterOptions.favorite,
      },
    }
  );

  return (
    <>
      <Header />

      <DataView>
        {data.pokemons.edges.map((pokemon: Pokemon) => (
          <PokemonCard showTypes pokemon={pokemon} key={pokemon.id} />
        ))}
      </DataView>
    </>
  );
}
