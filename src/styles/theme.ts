import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    yellow: {
      500: "#FFBA08",
    },
    gray: {
      600: "#47585B",
      400: "#999999",
      200: "#DADADA",
      50: "#F5F8FA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        background: "gray.50",
        color: "gray.600",
      },
    },
  },
});

export { theme };
