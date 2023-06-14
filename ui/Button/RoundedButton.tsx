import { FC } from "react";
import IButtonProps from "./IButtonProps";
import { classNames } from "@/utils";

const RoundedButton: FC<IButtonProps> = ({
  dataTestId,
  extraClassNames = "",
  onClick,
  children,
}) => {
  return (
    <button
      data-testid={dataTestId}
      type="button"
      className={classNames(
        "relative inline-flex items-center gap-x-1.5 rounded-full bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
        extraClassNames
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
