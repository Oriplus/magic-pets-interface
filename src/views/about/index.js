import { Text, Heading, Stack } from "@chakra-ui/react";

const About = () => {
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
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"} position={"relative"} color={"#845ec2"}>
            About
          </Text>
          <br />
        </Heading>
        <Text color={"gray.500"}>
          Magic Pets is a collection of Dynamic NFTs to raise funds. The
          contract owns the NFT once minted. At first, it is an egg that will
          change into an animal when purchased.
        </Text>
        <Text color={"gray.500"}>
          The funds will be sent to an address that will be a foundation address
          when the contract holder withdraws the funds. For mint, a person needs
          access and only the contract owner can grant that access.
        </Text>
        <Text color={"gray.500"}>
          Disclaimer: The entire project is for web3 learning purposes. There is
          no current animal foundation that is part of this project.
        </Text>
        <Text color={"gray.500"}>
          If you wanna help animals using web3 contact me :)
        </Text>
      </Stack>
    </Stack>
  );
};

export default About;
