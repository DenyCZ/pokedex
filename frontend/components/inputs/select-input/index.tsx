import Select, { SingleValue } from "react-select";

export type Option = { value: string; label: string };

type SelectInputProps = {
  options: Option[];
  onChange?: (value: string) => void;
}


export const SelectInput = ({ options, onChange }: SelectInputProps) => {
  const handleOnChange = (option: SingleValue<Option>) => {
    if (onChange !== undefined) {
      onChange(option === null ? "" : option.value);
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
