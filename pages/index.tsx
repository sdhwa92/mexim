import Head from "next/head";
import {
  LifebuoyIcon,
  UserIcon,
  PaperAirplaneIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { DefaultLayout } from "@/layouts";
import {
  SimpleFeatureWithColumns,
  FeatureWithScreenshot,
} from "@/components/Feature";
import { HeroWithAngledImage } from "@/components/Hero";
import { SimpleNewsletter } from "@/components/Newsletter";
import { IFeature } from "@/interfaces";
import FeatureWithScreenshotPanel from "@/components/Feature/FeatureWithScreenshotPanel";
import extensiveReachImage from "@/public/img/Artboard-1-2.webp";
import approachableAndAccessibleImage from "@/public/img/pexels-fauxels-3184338.jpg";

const whyChooseUsfeatures: IFeature[] = [
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

const extensiveReachFeatures = [
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

const approachableAndAccessibleFeatures = [
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

export default function Home() {
  return (
    <DefaultLayout home>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <HeroWithAngledImage />

        <SimpleFeatureWithColumns features={whyChooseUsfeatures} />

        <div className="py-12 sm:py-16">
          <FeatureWithScreenshot
            screenshotImage={extensiveReachImage}
            sectionName="Extensive Reach"
            mainHead="Australian-Owned, with a Global Network"
            subHead="Our vetted network of 300+ overseas forwarding partner offices was carefully hand-selected by our experienced Board of Directors over the decades. Having multiple options in most countries enables ICE to benchmark the best shipping option available and tailor the most specific logistical requirements."
            features={extensiveReachFeatures}
          />
        </div>
        <div className="py-12 sm:py-16">
          <FeatureWithScreenshot
            screenshotImage={approachableAndAccessibleImage}
            imageSide="right"
            sectionName="Approachable & Accessible"
            mainHead="Fast & Easy Communication"
            subHead="We understand that your time is valuable. At ICE, you can reach who is managing your shipment directly, without the challenge of going through multiple parties to discuss your business requirements. Our Board of Directors is heavily involved in the business operations and remains open and available to talk to you directly."
            features={approachableAndAccessibleFeatures}
          />
        </div>

        <FeatureWithScreenshotPanel />

        <SimpleNewsletter />
      </div>
    </DefaultLayout>
  );
}
