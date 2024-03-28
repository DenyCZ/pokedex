interface Attack {
  name: string;
  type: string;
  damage: number;
}

interface PokemonDimension {
  minimum: string;
  maximum: string;
}

interface PokemonEvolutionRequirement {
  amount: number;
  name: string;
}

interface Pokemon {
  id: string;
  number: number;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  evolutions: Pokemon[];
  evolutionRequirements: PokemonEvolutionRequirement;
  maxHP: number;
  image: string;
  sound: string;
  isFavorite: boolean;
}

interface PokemonConnection {
  limit: number;
  offset: number;
  count: number;
  edges: Pokemon[];
}

interface PokemonsQueryInput {
  limit?: number;
  offset?: number;
  search?: string;
  filter?: PokemonFilterInput;
}

interface PokemonFilterInput {
  type?: string;
  isFavorite?: boolean;
}

interface Query {
  pokemons: (query: PokemonsQueryInput) => PokemonConnection;
  pokemonByName: (name: string) => Pokemon | null;
  pokemonById: (id: string) => Pokemon | null;
  pokemonTypes: () => string[];
}

interface Mutation {
  favoritePokemon: (id: string) => Pokemon | null;
  unFavoritePokemon: (id: string) => Pokemon | null;
}

interface Root {
  query: Query;
  mutation: Mutation;
}

export type { Pokemon, PokemonConnection };
