import Image from "next/image";

import { SelectInput } from "@/components/inputs/select-input";
import { TextInput } from "@/components/inputs/text-input";

import { useViewStore } from "@/stores/view";
import { usePokemonStore } from "@/stores/pokemon";

import gridIcon from "@/public/grid-icon.svg";
import listIcon from "@/public/list-icon.svg";

import fetchTypes from "@/actions/fetch-types";
import { useEffect, useState } from "react";

export const HeaderInputs = () => {
  const { setView } = useViewStore();
  const { setSearch, setFilterOptions, filterOptions } = usePokemonStore();

  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      const { data } = await fetchTypes();
      setTypes(
        data.pokemonTypes.map((type: string) => ({ value: type, label: type }))
      );
    };

    fetcher();
  }, []);

  const handleOnChange = (newType: string) => {
    setFilterOptions(newType, filterOptions.favorite);
  };

  return (
    <div className="header__inputs">
      <TextInput placeholder="Search" onChange={setSearch} />

      <div className="header__inputs__select">
        <SelectInput options={types} onChange={handleOnChange} />
      </div>

      <div className="header__inputs__view">
        <div className="header__inputs__view__holder">
          <Image
            src={listIcon}
            height={20}
            width={20}
            alt="List view"
            onClick={() => setView("list")}
          />
        </div>
        <div className="header__inputs__view__holder">
          <Image
            src={gridIcon}
            height={20}
            width={20}
            alt="Grid view"
            onClick={() => setView("grid")}
          />
        </div>
      </div>
    </div>
  );
};
