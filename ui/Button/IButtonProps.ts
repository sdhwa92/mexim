import { ReactNode } from "react";

export default interface IButtonProps {
  dataTestId?: string;
  onClick: () => void;
  extraClassNames?: string;
  children: ReactNode;
}
