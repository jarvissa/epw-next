import {
  BorderProps,
  Center,
  InteractivityProps,
  LayoutProps,
  TypographyProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type LogoProps = LayoutProps &
  BorderProps &
  TypographyProps &
  InteractivityProps;

const Logo = ({
  children,
  boxSize = "10",
  border = "2px",
  borderRadius = "md",
  fontSize = "2xl",
  userSelect = "none",
  ...rest
}: PropsWithChildren<LogoProps>) => {
  return (
    <Center
      boxSize={boxSize}
      border={border}
      borderRadius={borderRadius}
      fontSize={fontSize}
      userSelect={userSelect}
      {...rest}
    >
      {children}
    </Center>
  );
};

export default Logo;
