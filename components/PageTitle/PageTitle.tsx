import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";
import { ReactNode } from "react";

type AppProps = {
  children: ReactNode;
};

export default function PageTitle({ children }: AppProps) {
  return (
    <div className={classNames("w-screen", COLOR_THEME.background.primary)}>
      <div
        className={classNames(
          "sm:py-2",
          "lg:mx-auto",
          "lg:max-w-7xl",
          "lg:py-4",
          "px-4",
          "sm:px-6",
          "lg:px-8"
        )}
      >
        <h1 className="text-3xl">{children}</h1>
      </div>
    </div>
  );
}
