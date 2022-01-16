import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  ContinentPage,
  Continent,
  City,
} from "app/feature/Continent/Continent.page";
import { ParsedUrlQuery } from "querystring";
import { ContinentApiResponseData } from "./api/continents/[code]";
import { api } from "app/services/api";

interface ContinentPageProps {
  continent: Continent;
  cities: City[];
}

interface ContinentPageParams extends ParsedUrlQuery {
  continent: string;
}

const REVALIDATE = 60 * 60; // 1 hour

const Continent: NextPage<ContinentPageProps> = ({ continent, cities }) => {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
      </Head>
      <ContinentPage continent={continent} cities={cities} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<ContinentPageParams> = () => {
  return {
    paths: [{ params: { continent: "europe" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<
  ContinentPageProps,
  ContinentPageParams
> = async ({ params }) => {
  const code = params?.continent!;
  const response = await api.get<ContinentApiResponseData>(
    `/continents/${code}`
  );

  const { cities, ...continent } = response.data;

  return {
    props: {
      continent,
      cities,
    },
    // revalidate: REVALIDATE,
  };
};

export default Continent;
