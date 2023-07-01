import Head from "next/head";
import Image from "next/image";
import { DefaultLayout } from "@/layouts";
import { Container } from "@/ui/Container";
import { PageTitle } from "@/components/PageTitle";

const stats = [
  {
    label: "Number of manufacturing businesses in South Korea",
    value: "70,000",
  },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

const values = [
  {
    name: "Quality",
    description:
      "We are committed to delivering products of the highest quality to our clients. We carefully select suppliers and products that meet stringent standards, ensuring that our customers receive goods that are reliable, durable, and meet their expectations.",
  },
  {
    name: "Affordability",
    description:
      "We believe that access to quality products should not come at a high cost. We strive to offer competitive prices that make our imported products affordable and accessible to local businesses. By providing cost-effective solutions, we help our clients enhance their competitiveness in the market.",
  },
  {
    name: "Integrity",
    description:
      "We conduct our business with the utmost integrity and transparency. Honesty, fairness, and ethical practices are at the core of everything we do. We build trust with our clients, suppliers, and partners by maintaining open and honest communication and by upholding the highest ethical standards.",
  },
  {
    name: "Customer Satisfaction",
    description:
      "Our customers are the heart of our business. We prioritize their needs and go above and beyond to ensure their satisfaction. From personalized service to timely delivery, we strive to exceed customer expectations and build long-term relationships based on trust and exceptional service.",
  },
  {
    name: "Innovationy",
    description:
      "We embrace innovation as a driving force behind our business. We continuously seek new and innovative solutions to better serve our clients and adapt to the ever-changing market demands. We stay ahead of trends, technologies, and consumer preferences to provide our customers with innovative products that meet their evolving needs.",
  },
  {
    name: "Collaboration",
    description:
      "We believe in the power of collaboration. We foster strong partnerships with our suppliers, clients, and industry stakeholders, working together to create mutually beneficial outcomes. By fostering a collaborative environment, we enhance our collective expertise, expand our networks, and achieve shared success.",
  },
];

export default function About() {
  return (
    <DefaultLayout home={false}>
      <Head>
        <title>About Us</title>
      </Head>

      <PageTitle>About Us</PageTitle>

      <Container extraClassNames="lg:py-20 py-4">
        {/* Content - our mission */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:flex-auto text-lg leading-8 text-gray-600">
              <p>
                At MEXIM, our mission is to bridge the gap between local
                businesses in Australia and the vast potential of the South
                Korean market. We are dedicated to providing businesses with
                exposure to new, high-quality products from overseas markets at
                significantly lower prices. Our goal is to empower Australian
                businesses by connecting them with reputable suppliers in South
                Korea, unlocking a world of opportunities for growth and
                profitability.
              </p>
              <p className="mt-10">
                Looking ahead, MEXIM aims to go beyond being a facilitator of
                product sourcing. We envision offering services that provide
                access to up-to-date market data, enabling you to make informed
                business decisions and forge connections with compatible
                businesses in both hemispheres. Our goal is to foster long-term
                partnerships and create a thriving ecosystem of collaboration,
                where businesses in Australia and South Korea can mutually
                benefit from each other&apos;s strengths.
              </p>
              <p className="mt-10">
                Join us at MEXIM and embark on a journey of discovering new
                opportunities, expanding your product range, and achieving
                sustainable growth. Let us be your trusted partner in navigating
                the South Korean market and unlocking the potential that lies
                within.
              </p>

              <p className="mt-10">
                Contact us today to discuss how we can assist you in realizing
                your business goals and taking your operations to new heights.
              </p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <Image
            src={
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            }
            width={1200}
            height={400}
            alt="Contact Mexim"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a commitment to these values, we strive to exceed
              expectations, build lasting partnerships, and drive positive
              impact in the market.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </DefaultLayout>
  );
}
