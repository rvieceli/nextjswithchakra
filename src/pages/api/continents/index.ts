import type { NextApiHandler } from "next";

import data from "../continents.json";
import { ContinentApiResponseData } from "./[code]";

const continentsApiHandler: NextApiHandler<ContinentApiResponseData[]> = (
  request,
  response
) => {
  const continent = data.continents;

  if (continent) {
    response.json(continent);
    return;
  }

  response.status(404).end();
};

export default continentsApiHandler;
