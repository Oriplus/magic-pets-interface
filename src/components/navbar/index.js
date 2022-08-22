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

const Navbar = () => {

  return(
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
                MagicPets
              </Heading>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;