import { debounce } from "radash";

interface InputProps {
  placeholder?: string;
  onChange?: (newValue: string) => void;
}

export const TextInput = (props: InputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange?.(e.target.value);
    }
  };

  const debouncedOnChange = debounce({ delay: 300 }, handleInputChange);

  return (
    <input
      type="text"
      className="input__text"
      placeholder={props.placeholder}
      onChange={debouncedOnChange}
    />
  );
};
