import Head from "next/head";
import {
  LifebuoyIcon,
  UserIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";
import { DefaultLayout } from "@/layouts";
import { FeatureSection } from "@/components/FeatureSection";
import { HeroWithAngledImage } from "@/components/Hero";
import { IFeature } from "@/interfaces";

const features: IFeature[] = [
  {
    name: "Air Freight",
    description:
      "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
    link: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Sea Freight",
    description:
      "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
    link: "#",
    icon: LifebuoyIcon,
  },
  {
    name: "Custom Consultancy",
    description:
      "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
    link: "#",
    icon: UserIcon,
  },
];

export default function Home() {
  return (
    <DefaultLayout home>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <HeroWithAngledImage />
        <FeatureSection features={features} />
      </div>
    </DefaultLayout>
  );
}
