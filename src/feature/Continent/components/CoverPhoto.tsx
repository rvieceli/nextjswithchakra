import NextImage from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

interface CoverPhotoProps {
  title: string;
  image_url: string;
}

const CoverPhoto = ({ title, image_url }: CoverPhotoProps) => {
  return (
    <Box width="100%" height={{ base: 163, md: 500 }} position="relative">
      <NextImage src={image_url} layout="fill" objectFit="cover" />
      <Box
        width="100%"
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
          height="100%"
          alignItems={["center", "flex-end"]}
          paddingBottom="14"
          paddingX={["6", "8"]}
        >
          <Text color="gray.50" fontSize="5xl" fontWeight="600">
            {title}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export { CoverPhoto };
