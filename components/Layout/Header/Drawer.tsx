import ColorMode from "../../ColorMode";
import NavLinkInterface from "../../../lib/interfaces/NavLinkInterface";
import NextLink from "next/link";
import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionLi, MotionUl } from "../../../lib/animation/components";
import { useRouter } from "next/router";
import { useState } from "react";

type NavDrawerProps = {
  links: NavLinkInterface[];
  flexProps?: FlexProps;
};

const initialActiveLink = (pathname: string) => pathname.split("/")[1] || "/";

const NavDrawer = ({ links, flexProps }: NavDrawerProps) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState(
    initialActiveLink(router.pathname)
  );
  const { colorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      bgColor={useColorModeValue("epw.50", "epw.700")}
      {...flexProps}
    >
      <MotionUl
        listStyleType="none"
        display="flex"
        flexDirection={{ md: "column" }}
        m={0}
        gridGap={4}
      >
        {links.map((link) => (
          <MotionLi key={link.key} textAlign="center">
            <NextLink href={link.to} passHref>
              <Link
                display="block"
                px={{ base: 3, md: "none" }}
                py={3}
                bgColor={
                  activeLink === link.key
                    ? colorMode === "dark"
                      ? "epw.800"
                      : "epw.100"
                    : undefined
                }
                _hover={{
                  bgColor: colorMode === "dark" ? "epw.800" : "epw.100",
                }}
                _focus={{}}
                _active={{
                  bgColor: colorMode === "dark" ? "epw.800" : "epw.100",
                }}
                onClick={() => setActiveLink(link.key)}
              >
                <Icon as={link.icon} fontSize={{ base: "2xl", md: "3xl" }} />
              </Link>
            </NextLink>
          </MotionLi>
        ))}
      </MotionUl>

      <ColorMode
        mr={{ base: 2, md: 0 }}
        mb={{ md: 2 }}
        outline="none"
        fontSize="2xl"
      />
    </Flex>
  );
};

export default NavDrawer;
