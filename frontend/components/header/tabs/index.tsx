"use client";
import { startTransition } from "react";

import { Button } from "@/components/inputs/button";
import { usePokemonStore } from "@/stores/pokemon";

export const HeaderTabs = () => {
  const { filterOptions, setFilterOptions } = usePokemonStore();

  const handleButtonClick = (favorite: boolean) => {
    if (filterOptions.favorite === favorite) return;

    startTransition(() => {
      setFilterOptions(filterOptions.type, favorite);
    });
  };

  return (
    <div className="header__tabs">
      <Button
        border
        fullWidth
        active={!filterOptions.favorite}
        onClick={() => handleButtonClick(false)}
      >
        All
      </Button>
      <Button
        border
        fullWidth
        active={filterOptions.favorite}
        onClick={() => handleButtonClick(true)}
      >
        Favorites
      </Button>
    </div>
  );
};
