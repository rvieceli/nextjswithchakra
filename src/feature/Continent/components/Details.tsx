import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Stat } from "app/components";

interface DetailsProps {
  description: string;
  stats: {
    countries: number | string;
    languages: number | string;
    cities: number | string;
  };
}

const Details = ({ description, stats }: DetailsProps) => {
  return (
    <SimpleGrid
      width="100%"
      maxWidth="1240px"
      height="100%"
      alignItems="center"
      paddingBottom="14"
      marginX="auto"
      paddingX={["6", "8"]}
      columns={2}
      marginTop={{ base: "10", lg: "14" }}
      minChildWidth={{ base: "320px", sm: "520px" }}
      gap="10"
    >
      <Text fontSize="2xl" textAlign="justify">
        {description}
      </Text>
      <Flex justifyContent="space-evenly">
        <Stat label="países" value={stats.countries} />
        <Stat label="línguas" value={stats.languages} />
        <Stat label="cidades +100" value={stats.cities} />
      </Flex>
    </SimpleGrid>
  );
};

export { Details };
