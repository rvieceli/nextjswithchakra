import NextImage from "next/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

interface CityProps {
  city: {
    name: string;
    cover_photo_url: string;
    country: string;
    flag_url: string;
  };
}

const CityCard = ({ city }: CityProps) => {
  return (
    <Box
      width="256px"
      borderColor="yellow.500"
      borderWidth={1}
      backgroundColor="white"
      borderRadius="base"
      overflow="hidden"
      marginX="auto"
    >
      <Box height="170px" position="relative">
        <NextImage src={city.cover_photo_url} layout="fill" objectFit="cover" />
      </Box>
      <Flex padding="6" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="xl" fontWeight="600">
            {city.name}
          </Text>
          <Text fontSize="md" color="gray.400" marginTop="2">
            {city.country}
          </Text>
        </Box>
        <Grid width="8" height="8" position="relative">
          <NextImage src={city.flag_url} layout="fill" objectFit="cover" />
        </Grid>
      </Flex>
    </Box>
  );
};

export { CityCard };
