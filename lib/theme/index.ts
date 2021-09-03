import "@fontsource/dm-sans";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    epw: {
      50: "#f0f2f5",
      100: "#e4e6eb",
      700: "#3a3b3c",
      800: "#242526",
      900: "#18191a",
      yellow: "#fedc47",
      yellorange: "#fdba3a",
    },
  },
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "epw.800")(props),
      },
    }),
  },
});

export default theme;
