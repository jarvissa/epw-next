import NavDrawer from "./Drawer";
import navLinks from "../../../lib/shared/navLinks";

const Header = () => {
  return (
    <NavDrawer
      links={navLinks}
      flexProps={{
        as: "header",
        pos: "relative",
        display: { base: "flex", md: "none" },
      }}
    />
  );
};

export default Header;
