import { startTransition, useEffect, useState } from "react";
import Image from "next/image";

import { SelectInput } from "@/components/inputs/select-input";
import { TextInput } from "@/components/inputs/text-input";

import { useViewStore } from "@/stores/view";
import { usePokemonStore } from "@/stores/pokemon";

import gridIcon from "@/public/grid-icon.svg";
import listIcon from "@/public/list-icon.svg";

import fetchTypes from "@/actions/fetch-types";
import { AvailableViews } from "@/interface/view";

export const HeaderInputs = () => {
  const { view, setView } = useViewStore();
  const { setSearch, setFilterOptions, filterOptions } = usePokemonStore();

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetchTypes();
      setTypes(
        data.pokemonTypes.map((type: string) => ({ value: type, label: type }))
      );
    };

    fetchData();
  }, []);

  const handleOnChange = (newType: string) => {
    setFilterOptions(newType, filterOptions.favorite);
  };

  const handleSetView = (newView: AvailableViews) => {
    if (view === newView) return;

    startTransition(() => {
      setView(newView);
    });
  };

  return (
    <div className="header__inputs">
      <TextInput placeholder="Search" onChange={setSearch} />

      <div className="header__inputs__select">
        <SelectInput options={types} onChange={handleOnChange} />
      </div>

      <div className="header__inputs__view">
        <div
          className="header__inputs__view__holder"
          onClick={() => handleSetView("list")}
        >
          <Image src={listIcon} height={20} width={20} alt="List view" />
        </div>
        <div
          className="header__inputs__view__holder"
          onClick={() => handleSetView("grid")}
        >
          <Image src={gridIcon} height={20} width={20} alt="Grid view" />
        </div>
      </div>
    </div>
  );
};
