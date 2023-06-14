import { FC } from "react";
import IButtonProps from "./IButtonProps";
import { classNames } from "@/utils";

const RoundedButton: FC<IButtonProps> = ({
  dataTestId,
  extraClassNames = "",
  onClick,
  children,
  color,
  hoverColor,
  outlineColor,
  textColor,
}) => {
  return (
    <button
      data-testid={dataTestId}
      type="button"
      className={classNames(
        "relative inline-flex items-center gap-x-1.5 rounded-full px-3.5 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        color ? color : "bg-indigo-500",
        hoverColor ? hoverColor : "hover:bg-indigo-400",
        outlineColor ? outlineColor : "focus-visible:outline-indigo-500",
        textColor ? textColor : "text-white",
        extraClassNames
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
