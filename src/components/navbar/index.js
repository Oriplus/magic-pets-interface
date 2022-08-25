import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import NavLink from "../nav-link";
import Wallet from "../wallet";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

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
    {
      name: "Mint",
      to: "/mint",
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={6} alignItems={"center"}>
          <Flex alignItems="center">
            <Image src="./magic-pets-logo.png" width="80px" />
          </Flex>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map(({ name, to }) => (
              <NavLink key={name} to={to} href={to}>
                {name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Wallet />
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map(({ name, to }) => (
              <NavLink key={name} to={to}>
                {name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
