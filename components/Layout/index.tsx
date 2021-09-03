import Footer from "./Footer";
import Header from "./Header";
import NavDrawer from "./Header/Drawer";
import navLinks from "../../lib/shared/navLinks";
import { Box } from "@chakra-ui/react";
import { Fragment, PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Fragment>
      <Header />

      <NavDrawer
        links={navLinks}
        flexProps={{
          as: "aside",
          w: 14,
          minH: "calc(100vh - 32px)",
          display: { base: "none", md: "flex" },
          top: 0,
        }}
      />

      <Box as="main" maxW="container.lg" ml={{ md: 14 }}>
        {children}
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Layout;
