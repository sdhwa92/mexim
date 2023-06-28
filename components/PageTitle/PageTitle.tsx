import { ReactNode } from "react";
import { Container } from "@/ui/Container";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";

type AppProps = {
  children: ReactNode;
};

export default function PageTitle({ children }: AppProps) {
  return (
    <div className={classNames("w-screen", COLOR_THEME.background.primary)}>
      <Container extraClassNames="lg:py-4 sm:py-2">
        <h1 className="text-3xl">{children}</h1>
      </Container>
    </div>
  );
}
