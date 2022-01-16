import NextImage from "next/image";
import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Continent, City } from "./Continent.types";
import { CoverPhoto } from "./components/CoverPhoto";
import { Details } from "./components/Details";
import { Cities } from "./components/Cities";

interface ContinentPageProps {
  continent: Continent;
  cities: City[];
}

const ContinentPage = ({ continent, cities }: ContinentPageProps) => {
  return (
    <Box flex="1">
      <CoverPhoto
        title={continent.name}
        image_url={continent.cover_photo_url}
      />

      <Details description={continent.description} stats={continent.stats} />

      <Cities cities={cities} />
    </Box>
  );
};

export { ContinentPage };
export type { Continent, City };
