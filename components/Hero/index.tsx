import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const Hero = ({ children }: PropsWithChildren<{}>) => {
  return <Box>{children}</Box>;
};

export default Hero;
