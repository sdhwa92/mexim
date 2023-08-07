import { ReactNode } from "react";
import { Container } from "@/ui/Container";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/lib/utils";

type AppProps = {
  children: ReactNode;
};

export default function PageTitle({ children }: AppProps) {
  return (
    <div className={classNames("w-screen", COLOR_THEME.background.primary)}>
      <Container extraClassNames="lg:py-4 sm:py-2">
        <h1 className={classNames("text-3xl", "text-white")}>{children}</h1>
      </Container>
    </div>
  );
}
