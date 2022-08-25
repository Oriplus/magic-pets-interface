import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Get your
          </Text>
          <br />
          <Text
            as={"span"}
            bgGradient="linear(to-l, #845EC2, #12A1F7)"
            bgClip="text"
          >
            Magic Pet
          </Text>
          ✨
        </Heading>
        <Text color={"gray.500"} fontSize={"xl"}>
          Magic Pets is a collection of NFTs to raise funds for an animal
          foundation.
        </Text>
        <Text color={"#845ec2"} fontSize={"xl"}>
          After buying an Egg you will receive a Pet, find out which one!
        </Text>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={{ base: "column", sm: "row" }}
        ></Stack>
      </Stack>
      <Flex
        flex={1}
        direction="column"
        justify={"center"}
        align={"center"}
        position={"relative"}
        w={"3x1"}
      >
        <Image src={"./images/magic-pets.png"} />
      </Flex>
    </Stack>
  );
};

export default Home;
