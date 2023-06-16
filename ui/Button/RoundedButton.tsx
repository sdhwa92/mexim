import { FC } from "react";
import IButtonProps, { ButtonSize } from "./IButtonProps";
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
  size = "md",
}) => {
  const sizeStyleClasses = (size: ButtonSize): string => {
    if (size === "xs") {
      return "px-2.5 py-1 text-xs";
    } else if (size === "sm") {
      return "px-2.5 py-1 text-sm";
    } else if (size === "md") {
      return "px-3 py-1.5 text-sm";
    } else if (size === "lg") {
      return "px-3.5 py-2 text-sm";
    } else {
      return "px-4 py-2.5 text-sm";
    }
  };

  return (
    <button
      data-testid={dataTestId}
      type="button"
      className={classNames(
        "relative inline-flex items-center gap-x-1.5 rounded-full font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        sizeStyleClasses(size),
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
