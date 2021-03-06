import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import { Fragment } from "react";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>{"Emin's Personal Website"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero>em</Hero>
    </Fragment>
  );
};

export default Home;

export { getServerSideProps } from "../components/Chakra";
