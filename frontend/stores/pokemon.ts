import { create } from "zustand";

type PokemonState = {
  limit: number;
  offset: number;
  search: string;
  filterOptions: {
    type: string;
    favorite: boolean;
  };
  setLimit: (limit: number) => void;
  setOffset: (offset: number) => void;
  setSearch: (search: string) => void;
  setFilterOptions: (type: string, favorite: boolean) => void;
};

export const usePokemonStore = create<PokemonState>((set) => ({
  limit: 10,
  offset: 0,
  search: "",
  filterOptions: {
    type: "",
    favorite: false,
  },
  setLimit: (limit: number) => set(() => ({ limit })),
  setOffset: (offset: number) => set(() => ({ offset })),
  setSearch: (search: string) => set(() => ({ search })),
  setFilterOptions: (type: string, favorite: boolean) =>
    set(() => ({ filterOptions: { type, favorite } })),
}));
