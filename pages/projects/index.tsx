import type { NextPage } from "next";
import Head from "next/head";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Projects | Emin's Personal Website"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Projects</p>
    </div>
  );
};

export default Projects;

export { getServerSideProps } from "../../components/Chakra";
