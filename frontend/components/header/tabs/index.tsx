"use client";
import { Button } from "@/components/inputs/button";
import { usePokemonStore } from "@/stores/pokemon";

export const HeaderTabs = () => {
  const { filterOptions, setFilterOptions } = usePokemonStore();

  return (
    <div className="header__tabs">
      <Button
        border
        fullWidth
        active={filterOptions.favorite === false}
        onClick={() => setFilterOptions(filterOptions.type, false)}
      >
        All
      </Button>
      <Button
        border
        fullWidth
        active={filterOptions.favorite === true}
        onClick={() => setFilterOptions(filterOptions.type, true)}
      >
        Favorites
      </Button>
    </div>
  );
};
