import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Center,
  Flex,
} from "@chakra-ui/react";
import Github from "../icons/github";
import LinkedIn from "../icons/linkedin";
import Twitter from "../icons/twitter";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Center w={"full"}>
            <Flex direction={"column"}>
              <Text>
                © {new Date().getFullYear()} Made with 💚 by
                <Link ml={1} href="https://twitter.com/Oriplus_">
                  Oriplus
                </Link>
              </Text>
              <Flex direction={"row"} justify={"center"}>
                <Link ml={1} href="https://github.com/Oriplus">
                  <Github />
                </Link>
                <Link ml={1} href="https://twitter.com/Oriplus_">
                  <Twitter />
                </Link>
                <Link ml={1} href="https://www.linkedin.com/in/oriana-morillo/">
                  <LinkedIn />
                </Link>
              </Flex>
            </Flex>
          </Center>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
