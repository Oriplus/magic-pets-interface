import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MinterAccess = () => {
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
          <Text
            as={"span"}
            position={"relative"}
            color={"#845ec2"}
          >
            Want to mint?
          </Text>
          <br />
        </Heading>
        <Text color={"gray.500"}>
          Only people with access can mint. If you want to mint your Magic Pet
          just ask for access &nbsp;
           <a href="https://twitter.com/Oriplus_" target="_blank" rel="noreferrer">
             @Oriplus_
            <ExternalLinkIcon mx="2px" />
          </a>
        </Text>
      </Stack>
    </Stack>
  );
};

export default MinterAccess;
