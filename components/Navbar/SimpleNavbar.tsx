import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RoundedButton } from "@/ui/Button";
import { COLOR_THEME } from "@/constants";
import { classNames, isActivePage } from "@/utils";
import Image, { StaticImageData } from "next/image";

interface Props {
  brand: {
    logoImage: StaticImageData;
    link?: string;
    alt: string;
  };
  menuItems: {
    name: string;
    link: string;
    isNewTab?: boolean;
  }[];
}

export default function SimpleNavbar({ menuItems, brand }: Props) {
  const { pathname } = useRouter();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="border-b border-b-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button
                      className={classNames(
                        "inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset",
                        COLOR_THEME.ring.primaryFocus,
                        COLOR_THEME.text.tertiary,
                        COLOR_THEME.text.tertiaryHover,
                        COLOR_THEME.background.tertiaryHover
                      )}
                    >
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      width={200}
                      height={200}
                      src={brand.logoImage}
                      alt={brand.alt}
                      className="w-auto max-h-36"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.link}
                        className={classNames(
                          "inline-flex items-center px-1 pt-1 text-sm font-medium uppercase",
                          isActivePage(item.link, pathname)
                            ? [
                                "border-b-2",
                                COLOR_THEME.border.primary,
                                COLOR_THEME.text.tertiary,
                              ].join(" ")
                            : [
                                "border-transparent",
                                COLOR_THEME.text.tertiaryReverse,
                                COLOR_THEME.text.tertiaryHover,
                                COLOR_THEME.border.tertiaryHover,
                              ].join(" ")
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <RoundedButton
                      dataTestId="navbar-left-button"
                      onClick={() => alert("click")}
                      extraClassNames="uppercase"
                      color={COLOR_THEME.background.primary}
                      hoverColor={COLOR_THEME.background.primaryHover}
                      outlineColor={COLOR_THEME.outline.primaryFocusVisible}
                      textColor={"text-white"}
                      size="xl"
                    >
                      Request a Quote
                    </RoundedButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              {menuItems.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.link}
                  className={classNames(
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6",
                    isActivePage(item.link, pathname)
                      ? [
                          COLOR_THEME.border.primary,
                          COLOR_THEME.background.primaryReverse,
                          COLOR_THEME.text.tertiary,
                        ].join(" ")
                      : [
                          "border-transparent",
                          COLOR_THEME.text.tertiaryReverse,
                          COLOR_THEME.text.tertiaryHover,
                          COLOR_THEME.border.tertiaryHover,
                          COLOR_THEME.background.tertiaryHover,
                        ].join(" ")
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
