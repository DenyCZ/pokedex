"use client";

import { useMemo } from "react";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import { useApolloClient, useMutation } from "@apollo/client";

import { Pokemon } from "@/interface/pokemon";
import { HeartIcon } from "@/components/icons/heart";
import { useViewStore } from "@/stores/view";
import {
  FAVORITE_POKEMON,
  UNFAVORITE_POKEMON,
} from "@/graphql/favorite-pokemon";

interface PokemonCardProps {
  pokemon: Pokemon;
  showTypes?: boolean;
  showAdvancedDetails?: boolean;
  showSound?: boolean;
}

export const PokemonCard = ({
  pokemon,
  showTypes,
  showAdvancedDetails,
  showSound,
}: PokemonCardProps) => {
  const { view } = useViewStore();
  const { resetStore } = useApolloClient();

  const [favorite] = useMutation(FAVORITE_POKEMON);
  const [unfavorite] = useMutation(UNFAVORITE_POKEMON);

  const handleFavorite = () => {
    if (pokemon.isFavorite === true) {
      unfavorite({ variables: { id: pokemon.id } });
    } else {
      favorite({ variables: { id: pokemon.id } });
    }

    resetStore();
  };

  const types = useMemo(() => {
    return pokemon?.types?.join(", ") ?? "";
  }, []);

  const cardClass = classNames(
    {
      "card--column": view === "grid",
      "card--row": view === "list",
    },
    "card"
  );

  return (
    <div className={cardClass}>
      <div className="card__image">
        <Link href={`/${pokemon.name}`}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Link>

        {showSound === true && <div className="card__image__sound">SOUND</div>}
      </div>

      <div className="card__description">
        <div className="card__description__row">
          <div className="card__description__text">
            <Link href={`/${pokemon.name}`}>
              <span>{pokemon.name}</span>
            </Link>
            {showTypes === true && <p>{types}</p>}
          </div>

          <div className="card__description__favorite" onClick={handleFavorite}>
            <HeartIcon marked={pokemon.isFavorite} />
          </div>
        </div>

        {showAdvancedDetails === true && (
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

      {showAdvancedDetails === true && (
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
