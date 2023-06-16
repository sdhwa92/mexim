import { ReactNode } from "react";

export default interface IButtonProps {
  dataTestId?: string;
  onClick: () => void;
  extraClassNames?: string;
  children: ReactNode;
  color?: string;
  hoverColor?: string;
  outlineColor?: string;
  textColor?: string;
  size?: ButtonSize;
  type?: ButtonType;
}

export type ButtonType = "button" | "submit" | "reset";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
