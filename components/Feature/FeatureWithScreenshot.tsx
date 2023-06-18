import Image, { StaticImageData } from "next/image";

import { RoundedButton } from "@/ui/Button";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";
import { IFeature } from "@/interfaces";

interface Props {
  imageSide?: "left" | "right";
  sectionName: string;
  mainHead: string;
  subHead?: string;
  features: IFeature[];
  screenshotImage: StaticImageData;
}

export default function FeatureWithScreenshot({
  imageSide = "left",
  sectionName,
  mainHead,
  subHead,
  features,
  screenshotImage,
}: Props) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
                className={`text-base uppercase font-semibold leading-7 ${COLOR_THEME.text.primary}`}
              >
                {sectionName}
              </h2>
              <p
                className={`mt-2 text-3xl font-bold tracking-tight ${COLOR_THEME.context.h1} sm:text-4xl`}
              >
                {mainHead}
              </p>
              <p className={`mt-6 text-lg leading-8 ${COLOR_THEME.context.h3}`}>
                {subHead}
              </p>
              <dl
                className={`mt-10 max-w-xl space-y-8 text-base leading-7 ${COLOR_THEME.context.p} lg:max-w-none`}
              >
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt
                      className={`inline font-semibold ${COLOR_THEME.context.p}`}
                    >
                      <feature.icon
                        className={`absolute left-1 top-1 h-5 w-5 ${COLOR_THEME.text.primary}`}
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="my-8">
                <RoundedButton
                  onClick={() => alert("click")}
                  extraClassNames="uppercase"
                  color={COLOR_THEME.background.primary}
                  hoverColor={COLOR_THEME.background.primaryHover}
                  outlineColor={COLOR_THEME.outline.primaryFocusVisible}
                  textColor={"text-white"}
                  size="xl"
                >
                  Read our success stories
                </RoundedButton>
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "flex items-start justify-end",
              imageSide === "left" ? "lg:order-first" : "lg:order-last"
            )}
          >
            <Image
              src={screenshotImage}
              width={1200}
              height={1800}
              className="inset-0 h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
