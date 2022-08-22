import {
  Badge,
  Button,
  Flex,
  Link,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Wallet = () => {
  const [isUnsupportedChain, setIsUnsupportedChain] = useState(true);
  const [active, setActive] = useState(false);

  const disconnect = () => {
    console.log("disconnect");
  };
  const connect = () => {
    console.log("connect");
  };
  return (
    <Flex alignItems={"center"}>
      {active ? (
        <Tag colorScheme="green" borderRadius="full">
          <Badge
            d={{
              base: "none",
              md: "block",
            }}
            variant="solid"
            fontSize="0.8rem"
            ml={1}
          >
            ~1.22 Ξ
          </Badge>
          <TagCloseButton onClick={disconnect} />
        </Tag>
      ) : (
        <Button
          variant={"solid"}
          colorScheme={"green"}
          size={"sm"}
          leftIcon={<AddIcon />}
          onClick={connect}
          disabled={isUnsupportedChain}
        >
          Conectar wallet
        </Button>
      )}
    </Flex>
  );
};

export default Wallet;
