import NextImage from "next/image";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

type TravelType = {
  title: string;
  icon: string;
};

const travelTypes: TravelType[] = [
  { title: "Vida Noturna", icon: "/images/cocktail.svg" },
  { title: "Praia", icon: "/images/surf.svg" },
  { title: "Moderno", icon: "/images/building.svg" },
  { title: "Clássico", icon: "/images/museum.svg" },
  { title: "e mais...", icon: "/images/earth.svg" },
];

const TravelTypes = () => {
  const isWideScreen = useBreakpointValue({ base: false, md: true });

  const renderMobile = (travelType: TravelType) => (
    <Flex
      key={travelType.title}
      marginX="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundColor="yellow.500"
        width="8px"
        height="8px"
        borderRadius="4px"
        marginRight="2"
      />
      <Text textAlign="center">{travelType.title}</Text>
    </Flex>
  );

  const renderWide = (travelType: TravelType) => (
    <Flex
      key={travelType.title}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="85px" height="85px" position="relative" marginBottom="6">
        <NextImage src={travelType.icon} layout="fill" objectFit="cover" />
      </Box>
      <Text>{travelType.title}</Text>
    </Flex>
  );

  return (
    <Box width="100%" marginY={{ base: "10", md: "20" }}>
      <SimpleGrid
        columns={travelTypes.length}
        minChildWidth="158px"
        rowGap="10"
        maxWidth="1240px"
        marginX="auto"
      >
        {travelTypes.map((travelType) =>
          isWideScreen ? renderWide(travelType) : renderMobile(travelType)
        )}
      </SimpleGrid>
    </Box>
  );
};

export { TravelTypes };
