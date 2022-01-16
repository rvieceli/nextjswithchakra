import NextImage from "next/image";
import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Continents.module.scss";
import { Continent } from "app/feature/Continent/Continent.types";

interface ContinentsProps {
  continents: Continent[];
}

const Continents = ({ continents }: ContinentsProps) => {
  return (
    <>
      <Flex direction="column" alignItems="center">
        <Text fontSize={{ base: "xl", md: "4xl" }}>Vamos nessa?</Text>
        <Text fontSize={{ base: "xl", md: "4xl" }}>
          Então escolha seu continente
        </Text>
      </Flex>

      <Box
        maxWidth="1240px"
        marginX="auto"
        height={{ base: "375px", md: "450px" }}
        marginTop="12"
        marginBottom="10"
      >
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.swiperDot}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperDotActive}`,
          }}
          navigation={true}
          className={styles.swiper}
        >
          {continents?.map((continent) => (
            <SwiperSlide key={continent.code} className={styles.swiperSlide}>
              <NextLink href={`/${continent.code}`} passHref>
                <Box as="a" width="100%" height="100%" position="relative">
                  <NextImage
                    src={continent.cover_photo_url}
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
              </NextLink>
              <NextLink href={`/${continent.code}`} passHref>
                <Link
                  position="absolute"
                  color="gray.50"
                  fontSize={{ base: "2xl", md: "5xl" }}
                  _hover={{
                    textDecoration: "none",
                    color: "yellow.500",
                  }}
                >
                  {continent.name}
                </Link>
              </NextLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export { Continents };
