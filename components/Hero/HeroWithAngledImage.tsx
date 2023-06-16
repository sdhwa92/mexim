import Image from "next/image";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";
import { Button } from "@/ui/Button";

export default function HeroWithAngledImage() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Anim aute id magna aliqua ad ad non deserunt sunt.{" "}
                    <a
                      href="#"
                      className={`whitespace-nowrap font-semibold ${COLOR_THEME.text.primary}`}
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1
                  className={`text-4xl font-bold tracking-tight ${COLOR_THEME.context.h1} sm:text-6xl`}
                >
                  Data to enrich your online business
                </h1>
                <p
                  className={`mt-6 text-lg leading-8 ${COLOR_THEME.context.p}`}
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    dataTestId="heroCtaBtn"
                    onClick={() => alert("click")}
                    color={COLOR_THEME.background.primary}
                    hoverColor={COLOR_THEME.background.primaryHover}
                    outlineColor={COLOR_THEME.outline.primaryFocusVisible}
                    textColor={"text-white"}
                    size="xl"
                  >
                    Get Started
                  </Button>
                  <a
                    href="#"
                    className={`text-sm font-semibold leading-6 ${COLOR_THEME.context.h1}`}
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src="/img/pexels-sascha-hormel-1095814.jpg"
            width={1200}
            height={800}
            className="inset-0 -z-10 h-full w-full object-cover"
            alt="Mexim Trading"
          />
        </div>
      </div>
    </div>
  );
}
