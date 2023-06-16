import { COLOR_THEME } from "@/constants";

interface IFeature {
  name: string;
  description: string;
  link: string;
  icon: any;
}

type AppProps = {
  features: IFeature[];
};

export default function SimpleFeatureWithColumns({ features }: AppProps) {
  return (
    <div className={`${COLOR_THEME.background.primary} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2
            className={`text-base font-semibold leading-7 ${COLOR_THEME.text.secondary}`}
          >
            WHY CHOOSE US
          </h2>
          <p
            className={`mt-2 text-3xl font-bold tracking-tight ${COLOR_THEME.context.h1Reverse} sm:text-4xl`}
          >
            Full-Service International Freight Forwarders
          </p>
          <p
            className={`mt-6 text-lg leading-8 ${COLOR_THEME.context.pReverse}`}
          >
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt
                  className={`flex items-center gap-x-3 text-base font-semibold leading-7 ${COLOR_THEME.context.pReverse}`}
                >
                  <feature.icon
                    className={`h-5 w-5 flex-none ${COLOR_THEME.text.secondary}`}
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd
                  className={`mt-4 flex flex-auto flex-col text-base leading-7 ${COLOR_THEME.context.pReverse}`}
                >
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.link}
                      className={`text-sm font-semibold leading-6 ${COLOR_THEME.text.secondary}`}
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
