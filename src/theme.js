import { extendTheme } from "@chakra-ui/react";
import "@fontsource/space-mono/700.css";

const theme = extendTheme({
  fonts: {
    body: "Space Mono, sans-serif",
  },
  colors: {
    cyan: {
      100: "#f4fafa", // very light grayish cyan
      200: "#c5e4e7", // light grayish cyan
      300: "#7f9c9f", // grayish cyan
      400: "#5e7a7d", // dark grayish cyan
      500: "#26c0ab", // strong cyan
      600: "#00494d", // dark cyan
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
