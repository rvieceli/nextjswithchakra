import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "app/components";
import { City } from "../Continent.types";

interface CitiesProps {
  cities: City[];
}

const Cities = ({ cities }: CitiesProps) => {
  return (
    <Box width="100%" maxWidth="1240px" marginX="auto" paddingX={["6", "8"]}>
      <Text fontSize="5xl" marginBottom="10">
        Cidades
      </Text>
      <SimpleGrid columns={4} minChildWidth="256px" gap={10} paddingBottom="20">
        {cities?.map((city) => (
          <CityCard key={city.name} city={city} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export { Cities };
