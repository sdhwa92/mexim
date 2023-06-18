import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import screenshotImage from "@/public/img/Artboard-1-2.webp";
import { RoundedButton } from "@/ui/Button";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/utils";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

interface Props {
  imageSide?: "left" | "right";
}

export default function FeatureWithScreenshot({ imageSide = "left" }: Props) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2
                className={`text-base font-semibold leading-7 ${COLOR_THEME.text.primary}`}
              >
                Deploy faster
              </h2>
              <p
                className={`mt-2 text-3xl font-bold tracking-tight ${COLOR_THEME.context.h1} sm:text-4xl`}
              >
                A better workflow
              </p>
              <p className={`mt-6 text-lg leading-8 ${COLOR_THEME.context.h3}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
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
              width={2432}
              height={1442}
              className="inset-0 h-full w-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
