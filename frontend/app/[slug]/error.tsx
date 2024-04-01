"use client";

import Image from "next/image";
import Link from "next/link";

import { BackButton } from "@/components/inputs/button-back";

import pokemonImage from "@/public/poke_who.webp";

export default function Error() {
  return (
    <div className="card card--column">
      <BackButton />

      <div className="card__image">
        <Image
          src={pokemonImage}
          alt="Who's that Pokemon?!"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="card__description">
        <div className="card__description__row">
          <div className="card__description__text">
            <span>{'Who\'s that Pokemon?!'}</span>
            <p>
              {'Sorry, we couldn\'t find this Pokemon, '}
              <Link href="/" className="link">
                go back & pick again!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
