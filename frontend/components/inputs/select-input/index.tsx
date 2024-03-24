import Select, { ActionMeta, SingleValue } from "react-select";

interface SelectInputProps {
  options: string[];
  onChange?: (value: string) => void;
}

export const SelectInput = ({ options, onChange }: SelectInputProps) => {
  const handleOnChange = (newType: { value: string }) => {
    if (onChange) {
      const type = (newType?.value as string) ?? "";
      onChange(type);
    }
  };

  return (
    <Select
      placeholder="Type"
      isClearable
      onChange={(newValue) => handleOnChange(newValue)}
      options={options}
    />
  );
};
