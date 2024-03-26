import Select, { ActionMeta, SingleValue } from "react-select";

interface SelectInputProps {
  options: string[];
  onChange?: (value: string) => void;
}

export const SelectInput = ({ options, onChange }: SelectInputProps) => {
  const handleOnChange = (newType: unknown) => {
    if (onChange) {
      //@ts-ignore
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
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "100%",
          backgroundColor: "#eee",
          border: "0",
          borderRadius: "0",
          cursor: "pointer",
          outline: "none",
          borderColor: "#eee",
        }),
      }}
    />
  );
};
