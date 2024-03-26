import "@/assets/css/styles.scss";
import fetchPokemons from "@/actions/fetch-pokemons";
import { Pokemon } from "@/interface/pokemon";

export async function generateStaticParams() {
  const { data } = await fetchPokemons();

  return data.pokemons.edges.map((pokemon: Pokemon) => ({
    slug: pokemon.name,
  }));
}

export default function PokemonPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container detail">{children}</div>;
}
