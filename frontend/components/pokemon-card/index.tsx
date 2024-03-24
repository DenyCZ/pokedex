"use client";

import { useMemo } from "react";

import classNames from "classnames";
import Image from "next/image";

import { useMutation } from "@apollo/client";

import { Pokemon } from "@/interface/pokemon";
import { useViewStore } from "@/stores/view";
import {
  FAVORITE_POKEMON,
  UNFAVORITE_POKEMON,
} from "@/graphql/favorite-pokemon";

interface PokemonCardProps {
  showTypes?: boolean;
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon, showTypes }: PokemonCardProps) => {
  const { view } = useViewStore();

  const [favorite] = useMutation(FAVORITE_POKEMON);
  const [unfavorite] = useMutation(UNFAVORITE_POKEMON);

  const types = useMemo(() => {
    return pokemon.types.join(", ");
  }, [pokemon]);

  const cardClass = classNames("card", {
    "card--column": view === "grid",
    "card--row": view === "list",
  });

  return (
    <div className={cardClass}>
      <div className="card__image">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={300}
          height={300}
        />
      </div>

      <div className="card__description">
        <div className="card__description__text">
          <span>{pokemon.name}</span>
          {showTypes && <p>{types}</p>}
        </div>

        <div
          className="card__description__favorite"
          onClick={() =>
            pokemon.isFavorite
              ? unfavorite({ variables: { id: pokemon.id } })
              : favorite({ variables: { id: pokemon.id } })
          }
        >
          {pokemon.isFavorite ? "❤️" : "<3"}
        </div>
      </div>
    </div>
  );
};
