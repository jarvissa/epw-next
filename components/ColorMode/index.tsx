import { Box, BoxProps, useColorMode } from "@chakra-ui/react";

const ColorMode = (props: BoxProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="button"
      fontSize="xl"
      cursor="pointer"
      userSelect="none"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === "dark" ? "☀️" : "🌙"}
    </Box>
  );
};

export default ColorMode;
