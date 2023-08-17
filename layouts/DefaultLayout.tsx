import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DM_Sans } from "next/font/google";
import { SimpleNavbar } from "@/components/Navbar";
import { SimpleCenteredFooter } from "@/components/Footer";
import { classNames } from "@/lib/utils";
import logo from "@/public/img/logo.png";

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
  const router = useRouter();

  return (
    <div className={classNames("bg-white", dmSans.className)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleNavbar
        brand={{
          logoImage: logo,
          alt: "Mexim logo",
        }}
        menuItems={[
          {
            name: "Products",
            link: "/products",
            isDisabled: true,
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
        cta={{
          text: "Request for Quote",
          onClick: () => router.push("/contact"),
        }}
      />

      {/* remove paddings for the container => px-4 sm:px-6 lg:px-8 lg:py-8 sm:py-6 */}
      <main className="container mx-auto">{children}</main>

      <SimpleCenteredFooter
        menu={[
          {
            name: "Products",
            href: "/products",
          },
          {
            name: "About",
            href: "/about",
          },
          {
            name: "Contact",
            href: "/contact",
          },
        ]}
        social={[
          {
            name: "Facebook",
            type: "fb",
            href: "#",
          },
          {
            name: "Instagram",
            type: "in",
            href: "#",
          },
          {
            name: "Twitter",
            type: "tw",
            href: "#",
          },
        ]}
      />
    </div>
  );
}
