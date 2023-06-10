import Head from "next/head";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>

      <h1>Home Page</h1>
    </Layout>
  );
}
