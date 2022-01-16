import { Flex, Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextImage from "next/image";
import NextLink from "next/link";
import { BsChevronLeft } from "react-icons/bs";

const Header = () => {
  const router = useRouter();
  const imageScale = useBreakpointValue<number>({ base: 1, md: 2.3 });

  const isHome = !router.asPath || router.asPath === "/";

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth="1160px"
      height={{ base: 50, md: 100 }}
      marginX="auto"
      position="relative"
      align="center"
      paddingX={["6", "8"]}
    >
      {!isHome && (
        <NextLink href="/" passHref>
          <Link position="absolute">
            <Icon
              as={BsChevronLeft}
              width={{ base: "16px", md: "32px" }}
              height={{ base: "16px", md: "32px" }}
              color="gray.600"
            />
          </Link>
        </NextLink>
      )}
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
      >
        <NextImage
          height={20 * (imageScale || 1)}
          width={81 * (imageScale || 1)}
          src="/images/logo.svg"
          alt="Logo"
        />
      </Flex>
    </Flex>
  );
};

export { Header };
