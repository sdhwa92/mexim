import { ReactNode } from "react";
import Head from "next/head";
import { DM_Sans } from "next/font/google";
import { SimpleNavbar } from "@/components/Navbar";
import { SimpleCenteredFooter } from "@/components/Footer";
import { classNames } from "@/utils";

const dmSans = DM_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  children: ReactNode;
  home: boolean;
}

export default function DefaultLayout({ children, home }: Props) {
  return (
    <div className={classNames("bg-white", dmSans.className)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleNavbar
        menuItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "Industries",
            link: "/industries",
          },
          {
            name: "About",
            link: "/about",
          },
          {
            name: "Contact",
            link: "/contact",
          },
        ]}
      />

      {/* remove paddings for the container => px-4 sm:px-6 lg:px-8 lg:py-8 sm:py-6 */}
      <div className="container mx-auto">{children}</div>

      <SimpleCenteredFooter />
    </div>
  );
}
