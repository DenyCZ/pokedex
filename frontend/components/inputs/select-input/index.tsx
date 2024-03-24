import Select, { ActionMeta, SingleValue } from "react-select";

import { usePokemonStore } from "@/stores/pokemon";

interface SelectInputProps {
  options: string[];
}

export const SelectInput = ({ options }: SelectInputProps) => {
  const { filterOptions, setFilterOptions } = usePokemonStore();

  const handleOnChange = (newType: SingleValue<string>) => {
    const type = (newType?.value as string) ?? "";

    setFilterOptions(type, filterOptions.favorite);
  };

  return (
    <Select
      placeholder="Type"
      defaultValue={filterOptions.type}
      isClearable
      onChange={(newValue) => handleOnChange(newValue)}
      options={options}
    />
  );
};
