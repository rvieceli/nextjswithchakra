import NextImage from "next/image";
import { Box, Heading, Flex, useBreakpointValue, Text } from "@chakra-ui/react";

const Banner = () => {
  const isLarge = useBreakpointValue<boolean>({ base: false, lg: true });

  return (
    <Box>
      <Box width="100%" height={{ base: 163, lg: 335 }} position="relative">
        <NextImage
          src="/images/background.jpg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Box
          width="100%"
          // height={[50, 100]}
          top="0"
          bottom="0"
          marginX="auto"
          align="center"
          paddingX={["6", "8"]}
          position="absolute"
        >
          <Flex
            width="100%"
            maxWidth="1240px"
            justify="space-between"
            height="100%"
          >
            <Flex direction="column" justify="center" flex="1">
              <Heading
                color="gray.50"
                textAlign="left"
                fontWeight="500"
                lineHeight="auto"
                fontSize={{ base: "xl", lg: "4xl" }}
              >
                5 Continentes,
                <br />
                infinitas possibilidades.
              </Heading>
              <Text
                fontSize={{ base: "md", lg: "xl" }}
                color="gray.400"
                textAlign="left"
                lineHeight="auto"
                marginTop="5"
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Flex>
            {isLarge && (
              <Box transform="rotate(3deg)" paddingTop="24">
                <NextImage
                  src="/images/airplane.svg"
                  width="417px"
                  height="270px"
                />
              </Box>
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export { Banner };
