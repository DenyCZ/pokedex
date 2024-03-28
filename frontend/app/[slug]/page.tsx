"use client";
import { useSuspenseQuery } from "@apollo/client";

import { PokemonCard } from "@/components/pokemon-card";
import { BackButton } from "@/components/inputs/button-back";
import { FETCH_POKEMON_BY_NAME } from "@/graphql/fetch-pokemon-name";
import { Pokemon } from "@/interface/pokemon";

export default function PokemonPage({ params }: { params: { slug: string } }) {
  const { data } = useSuspenseQuery<{ pokemonByName: Pokemon }>(
    FETCH_POKEMON_BY_NAME,
    {
      variables: {
        name: decodeURIComponent(params.slug),
      },
    }
  );

  if (data.pokemonByName === null) {
    throw new Error("Error fetching data");
  }

  return (
    <>
      <BackButton />

      <PokemonCard
        pokemon={data.pokemonByName}
        showSound
        showTypes
        showAdvancedDetails
      />

      {data.pokemonByName?.evolutions?.length > 0 && (
        <div className="detail__evolutions">
          <h2>Evolutions</h2>
          <div className="detail__evolutions__grid">
            {data.pokemonByName?.evolutions?.map((pokeEvolution: Pokemon) => (
              <PokemonCard key={pokeEvolution.id} pokemon={pokeEvolution} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
