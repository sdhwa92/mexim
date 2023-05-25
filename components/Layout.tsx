import { ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
  home: boolean;
}

export default function Layout({ children, home }: Props) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
