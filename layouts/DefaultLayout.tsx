import { ReactNode } from "react";
import Head from "next/head";
import { SimpleNavbar } from "@/components/Navbar";

interface Props {
  children: ReactNode;
  home: boolean;
}

export default function DefaultLayout({ children, home }: Props) {
  return (
    <div className="bg-gray-900">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleNavbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:py-8 sm:py-6">
        {children}
      </div>
    </div>
  );
}
