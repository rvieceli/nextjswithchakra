import { Box, Divider } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { TravelTypes } from "./components/TravelTypes";
import { Continents } from "./components/Continents";
import { Continent } from "../Continent/Continent.types";

interface HomePageProps {
  continents: Continent[];
}

const HomePage = ({ continents }: HomePageProps) => {
  return (
    <Box flex="1">
      <Banner />
      <TravelTypes />

      <Divider
        marginTop={{ base: "5", md: "20" }}
        marginBottom="14"
        width="24"
        marginX="auto"
        borderBottomWidth="2px"
        borderColor="gray.600"
      />

      <Continents continents={continents} />
    </Box>
  );
};

export { HomePage };
