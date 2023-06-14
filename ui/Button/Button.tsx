import { FC } from "react";
import IButtonProps from "./IButtonProps";

const Button: FC<IButtonProps> = ({
  dataTestId,
  extraClassNames,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
