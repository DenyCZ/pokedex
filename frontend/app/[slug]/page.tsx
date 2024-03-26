"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useSuspenseQuery } from "@apollo/client";

import { PokemonCard } from "@/components/pokemon-card";
import { FETCH_POKEMON_BY_NAME } from "@/graphql/fetch-pokemon-name";
import { Pokemon } from "@/interface/pokemon";

import backArrow from "@/public/arrow-back.svg";

export default function PokemonPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

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

  //TODO: Fetch data for the evolution chain

  return (
    <>
      <button className="card--back" onClick={() => router.back()}>
        <Image src={backArrow} width={20} height={20} alt="back" />
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
          {data.pokemonByName?.evolutions?.map((pokeEvolution: Pokemon) => (
            <PokemonCard
              type="small"
              key={pokeEvolution.id}
              pokemon={data.pokemonByName}
            />
          ))}
        </div>
      </div>
    </>
  );
}
