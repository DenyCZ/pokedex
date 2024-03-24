import classNames from "classnames";

interface ButtonProps {
  onClick?: () => void;

  border?: boolean;
  active?: boolean;
  fullWidth?: boolean;

  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const btnClass = classNames({
    button: true,
    "button--border": props.border,
    "button--active": props.active,
    button__wfull: props.fullWidth,
  });

  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.children}
    </button>
  );
};
