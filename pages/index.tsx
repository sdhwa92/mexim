import Head from "next/head";
import { useRouter } from "next/router";
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

const whyChooseUsFeatures: IFeature[] = [
  {
    name: "Extensive Expertise",
    description:
      "Our team of experienced professionals brings in-depth knowledge of global trade practices, regulations, and market trends. Benefit from their expertise to streamline your import and export operations.",
    link: "/about",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Practical Insights",
    description:
      "Stay up-to-date with the latest industry insights and trends through our thoughtfully curated content. Gain valuable tips and strategies to optimize your import and export processes and maximize your international business potential.",
    link: "/about",
    icon: LifebuoyIcon,
  },
  {
    name: "Customized Solutions",
    description:
      "We understand that every business has unique requirements. Leverage our personalized solutions tailored to your specific needs, whether you are a seasoned trader or just starting your international business journey.",
    link: "/about",
    icon: UserIcon,
  },
];

const extensiveReachFeatures = [
  {
    name: "Expert Guidance",
    description:
      "Access expert guidance from industry professionals who specialize in import and export. Benefit from our experience and insights as we provide tips, strategies, and best practices to optimize your international trade operations. Get answers to your specific questions and overcome challenges with the help of our knowledgeable team.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Networking and Collaboration",
    description:
      "Connect with a vibrant community of importers, exporters, trade professionals, and industry experts. Engage in discussions, share experiences, and forge valuable partnerships to expand your network and explore collaborative opportunities in the import-export ecosystem.",
    icon: LockClosedIcon,
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
  const router = useRouter();

  return (
    <DefaultLayout home>
      <Head>
        <title>Home</title>
      </Head>

      <div>
        <HeroWithAngledImage
          title="All about Import & Export"
          description={
            "Expand your business horizons with comprehensive knowledge and insights into the detailed world of import and export. We are your go-to resource for everything related to international trade, providing valuable information, expert guidance, and practical tips to navigate the complexities of importing and exporting goods across borders."
          }
        />

        <SimpleFeatureWithColumns features={whyChooseUsFeatures} />

        <div className="py-12 sm:py-16">
          <FeatureWithScreenshot
            screenshotImage={extensiveReachImage}
            sectionName="Extensive Reach"
            mainHead="Australian-Owned, with a Global Network"
            features={extensiveReachFeatures}
            cta={{
              text: "Contact Us",
              onClick: () => router.push("/contact"),
            }}
          />
        </div>
        {/* <div className="py-12 sm:py-16">
          <FeatureWithScreenshot
            screenshotImage={approachableAndAccessibleImage}
            imageSide="right"
            sectionName="Approachable & Accessible"
            mainHead="Fast & Easy Communication"
            subHead="We understand that your time is valuable. At ICE, you can reach who is managing your shipment directly, without the challenge of going through multiple parties to discuss your business requirements. Our Board of Directors is heavily involved in the business operations and remains open and available to talk to you directly."
            features={approachableAndAccessibleFeatures}
          />
        </div>

        <FeatureWithScreenshotPanel /> */}

        <SimpleNewsletter />
      </div>
    </DefaultLayout>
  );
}
