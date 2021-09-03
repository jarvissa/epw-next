import ColorMode from "../../ColorMode";
import HeaderTabs from "./Tabs";
import NavDrawer from "./Drawer";
import navLinks from "../../../lib/shared/navLinks";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      ml={{ md: 14 }}
      bgColor={useColorModeValue("white", "epw.900")}
    >
      <Flex justify="space-between" align="center">
        <HeaderTabs />

        <ColorMode boxSize="10" mr={2} outline="none" />
      </Flex>

      <NavDrawer
        links={navLinks}
        flexProps={{ display: { base: "flex", md: "none" }, h: 14 }}
      />
    </Box>
  );
};

export default Header;
