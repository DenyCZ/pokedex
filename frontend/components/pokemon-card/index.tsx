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
import { HeartIcon } from "../icons/heart";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Pokemon;
  showTypes?: boolean;
  showAdvancedDetails?: boolean;
  showSound?: boolean;
  type?: "small" | "big";
}

export const PokemonCard = ({
  pokemon,
  showTypes,
  showAdvancedDetails,
  showSound,
  type = "big",
}: PokemonCardProps) => {
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
        <Link href={`/${pokemon.name}`}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={type === "small" ? 150 : 250}
            height={type === "small" ? 150 : 250}
          />
        </Link>

        {showSound && <div className="card__image__sound">SOUND</div>}
      </div>

      <div className="card__description">
        <div className="card__description__row">
          <div className="card__description__text">
            <Link href={`/${pokemon.name}`}>
              <span>{pokemon.name}</span>
            </Link>
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
            <HeartIcon marked={pokemon.isFavorite} />
          </div>
        </div>

        {showAdvancedDetails && (
          <div className="card__description__points">
            <div className="card__description__points__row">
              <div className="progress progress__blue">&nbsp;</div>
              <span>CP: {pokemon.maxCP} </span>
            </div>

            <div className="card__description__points__row">
              <div className="progress progress__green">&nbsp;</div>
              <span>HP: {pokemon.maxHP}</span>
            </div>
          </div>
        )}
      </div>

      {showAdvancedDetails && (
        <div className="card__advanced">
          <div className="card__advanced__box">
            <span>Weight</span>
            <p>7.88kg - 69.99kg</p>
          </div>

          <div className="card__advanced__box">
            <span>Height</span>
            <p>7.88kg - 69.99kg</p>
          </div>
        </div>
      )}
    </div>
  );
};
