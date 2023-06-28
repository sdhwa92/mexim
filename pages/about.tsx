import Head from "next/head";
import { DefaultLayout } from "@/layouts";
import { PageTitle } from "@/components/PageTitle";

export default function About() {
  return (
    <DefaultLayout home={false}>
      <Head>
        <title>About Us</title>
      </Head>

      <PageTitle>About Us</PageTitle>
    </DefaultLayout>
  );
}
