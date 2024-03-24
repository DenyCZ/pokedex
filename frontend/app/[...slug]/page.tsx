"use client";

import { PokemonCard } from "@/components/pokemon-card";
import { FETCH_POKEMON_BY_NAME } from "@/graphql/fetch-pokemon-name";
import { Pokemon } from "@/interface/pokemon";
import { useSuspenseQuery } from "@apollo/client";
import { useRouter } from "next/navigation";

export default function PokemonPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const { data } = useSuspenseQuery<{ pokemonByName: Pokemon }>(
    FETCH_POKEMON_BY_NAME,
    {
      variables: {
        name: params.slug[0],
      },
    }
  );

  //TODO: Fetch data for the evolution chain

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="container detail">
      <button className="card--back" onClick={handleGoBack}>
        {"<-"}
      </button>
      <PokemonCard
        pokemon={data.pokemonByName}
        showSound
        showTypes
        showAdvancedDetails
      />

      <div className="detail__evolutions">
        <h2>Evolutions</h2>
        <div className="detail__evolutions__grid">
          {data.pokemonByName.evolutions.map((pokeEvolution: Pokemon) => (
            <PokemonCard
              type="small"
              key={pokeEvolution.id}
              pokemon={data.pokemonByName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
