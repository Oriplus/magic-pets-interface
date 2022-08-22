import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Heading,
} from "@chakra-ui/react";
import NavLink from "../nav-link";
import Wallet from "../wallet";


const Navbar = () => {
  const Links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Pets",
      to: "/pets",
    },
  ];
  return (
    <Flex minH="100vh" direction="column">
      <Box
        mx="auto"
        maxW={"7xl"}
        width="100%"
        bg={useColorModeValue("white", "gray.800")}
        px={4}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Image src="./images/my-avatar-logo.png" width="80px" />
              <Heading size="md" color="purple" mt={0.2} ml={1}>
                Pets
              </Heading>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Wallet />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
