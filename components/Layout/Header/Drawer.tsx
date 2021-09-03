import NavLinkInterface from "../../../lib/interfaces/NavLinkInterface";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionLi, MotionUl } from "../../../lib/animation/components";
import { useState } from "react";
import { useRouter } from "next/router";

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
      pos={{ base: "relative", md: "absolute" }}
      justify="space-between"
      direction={{ md: "column" }}
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
                <Icon as={link.icon} fontSize="3xl" />
              </Link>
            </NextLink>
          </MotionLi>
        ))}
      </MotionUl>

      <NextLink href="https://github.com/jarvissa" passHref>
        <Link
          isExternal
          p={3}
          textAlign="center"
          _hover={{ bgColor: colorMode === "dark" ? "epw.800" : "epw.100" }}
          _focus={{}}
        >
          <Icon as={FaGithub} boxSize={8}></Icon>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default NavDrawer;
