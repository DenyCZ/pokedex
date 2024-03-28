import Select, { SingleValue } from "react-select";

type Option = { value: string; label: string };

interface SelectInputProps {
  options: string[];
  onChange?: (value: string) => void;
}

export const SelectInput = ({ options, onChange }: SelectInputProps) => {
  const handleOnChange = (option: SingleValue<string>) => {
    if (onChange !== undefined && option !== null) {
      const newType = option as unknown as Option;
      onChange(newType.value);
    }
  };

  return (
    <Select
      placeholder="Type"
      isClearable
      onChange={(newValue) => handleOnChange(newValue)}
      options={options}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: "100%",
          backgroundColor: "#eee",
          border: "0",
          borderRadius: "0",
          cursor: "pointer",
          outline: "none",
          borderColor: "#eee",
          boxShadow: "none",
          padding: ".75rem",

          ":hover": {
            border: "0",
          },
        }),
      }}
    />
  );
};
