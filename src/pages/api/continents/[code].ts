import type { NextApiHandler } from "next";

import data from "../continents.json";

export interface ContinentApiResponseData {
  name: string;
  cover_photo_url: string;
  description: string;
  stats: {
    countries: number;
    languages: number;
    cities: number;
  };
  cities: {
    name: string;
    cover_photo_url: string;
    country: string;
    flag_url: string;
  }[];
}

const continentsApiHandler: NextApiHandler<ContinentApiResponseData> = (
  request,
  response
) => {
  const code = String(request.query.code);

  const continent = data.continents.find(
    (continent) => continent.code === code
  );

  if (continent) {
    response.json(continent);
    return;
  }

  response.status(404).end();
};

export default continentsApiHandler;
