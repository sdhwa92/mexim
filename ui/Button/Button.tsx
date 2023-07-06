import React, { FC } from "react";
import { classNames } from "@/lib/utils";
import { sizeClasses } from "./helpers";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  size,
  className,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(
        "relative inline-flex items-center gap-x-1.5 rounded-md font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-500 text-white",
        sizeClasses(size ? size : "md"),
        disabled ? "cursor-not-allowed opacity-50" : null,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
