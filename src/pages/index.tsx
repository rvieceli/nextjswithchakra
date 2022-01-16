import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { HomePage } from "app/feature/Home/Home.page";
import { Continent } from "app/feature/Continent/Continent.types";
import { api } from "app/services/api";

interface HomePageProps {
  continents: Continent[];
}

const Home: NextPage<HomePageProps> = ({ continents }) => {
  return (
    <>
      <Head>
        <title>worldtrip</title>
      </Head>
      <HomePage continents={continents} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const response = await api.get(`/continents`);

  const continents = response.data;

  return {
    props: {
      continents,
    },
    // revalidate: REVALIDATE,
  };
};

export default Home;
