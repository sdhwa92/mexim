import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { RoundedButton } from "@/ui/Button";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";

export default function SimpleNavbar() {
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
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <a
                      href="#"
                      className={classNames(
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                        COLOR_THEME.border.primary,
                        COLOR_THEME.text.tertiary
                      )}
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className={classNames(
                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium",
                        COLOR_THEME.text.tertiaryReverse,
                        COLOR_THEME.text.tertiaryHover,
                        COLOR_THEME.border.tertiaryHover
                      )}
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className={classNames(
                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium",
                        COLOR_THEME.text.tertiaryReverse,
                        COLOR_THEME.text.tertiaryHover,
                        COLOR_THEME.border.tertiaryHover
                      )}
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className={classNames(
                        "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium",
                        COLOR_THEME.text.tertiaryReverse,
                        COLOR_THEME.text.tertiaryHover,
                        COLOR_THEME.border.tertiaryHover
                      )}
                    >
                      Calendar
                    </a>
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
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6",
                  COLOR_THEME.border.primary,
                  COLOR_THEME.background.primaryReverse,
                  COLOR_THEME.text.tertiary
                )}
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6",
                  COLOR_THEME.text.tertiaryReverse,
                  COLOR_THEME.text.tertiaryHover,
                  COLOR_THEME.border.tertiaryHover,
                  COLOR_THEME.background.tertiaryHover
                )}
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6",
                  COLOR_THEME.text.tertiaryReverse,
                  COLOR_THEME.text.tertiaryHover,
                  COLOR_THEME.border.tertiaryHover,
                  COLOR_THEME.background.tertiaryHover
                )}
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className={classNames(
                  "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6",
                  COLOR_THEME.text.tertiaryReverse,
                  COLOR_THEME.text.tertiaryHover,
                  COLOR_THEME.border.tertiaryHover,
                  COLOR_THEME.background.tertiaryHover
                )}
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
