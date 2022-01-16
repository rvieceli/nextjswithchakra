import { Flex, Text } from "@chakra-ui/react";

interface StatProps {
  value: string | number;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <Flex direction="column" alignItems="center">
      <Text
        color="yellow.500"
        fontWeight="600"
        fontSize={{ base: "2xl", md: "5xl" }}
        lineHeight="10"
      >
        {value}
      </Text>
      <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="600">
        {label}
      </Text>
    </Flex>
  );
};

export { Stat };
