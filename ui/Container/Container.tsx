import { classNames } from "@/lib/utils";
import { ReactElement } from "react";

type AppProps = {
  children: ReactElement | ReactElement[];
  extraClassNames?: string;
};

export default function Container({ children, extraClassNames }: AppProps) {
  return (
    <div
      className={classNames(
        "lg:mx-auto",
        "lg:max-w-7xl",
        "px-4",
        "sm:px-6",
        "lg:px-8",
        extraClassNames ?? ""
      )}
    >
      {children}
    </div>
  );
}
