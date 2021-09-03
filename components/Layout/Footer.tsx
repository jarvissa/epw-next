import {
  Box,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";
import { SiNextDotJs } from "react-icons/si";

const Footer = () => {
  return (
    <Box
      as="footer"
      pos="fixed"
      bottom={0}
      w="full"
      h={{ md: 8 }}
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      px={{ md: 4 }}
      py={{ base: 4, md: 0 }}
      bgColor={useColorModeValue("epw.50", "epw.700")}
      fontSize="sm"
    >
      <Stack direction="row" justify="center" align="center">
        <Text color={useColorModeValue("gray.500", "gray.300")}>
          Inspired by{" "}
          <Link isExternal href="https://www.taniarascia.com/" _focus={{}}>
            Tania Rascia
          </Link>
        </Text>

        <Icon as={FcLike} />
      </Stack>

      <Stack direction="row" justify="center" align="center">
        <Text>Powered by</Text>

        <Link isExternal href="https://nextjs.org/" _focus={{}}>
          <Icon as={SiNextDotJs} />
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
