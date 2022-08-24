import {
  Box,
  Heading,
  Stack,
  useColorModeValue,
  Image,
  Text,
  Button,
  useToast,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import useMagicPetsContract from "../../hooks/useMagicPetsContract";

const PetCard = ({ name, description, image, tokenId, price, onSale, priceToSet, update, owner, attributes }) => {
  const { account } = useWeb3React();
  const magicPetsContract = useMagicPetsContract();
  const toast = useToast();
  const [buying, setBuying] = useState(false);

  const buyPet = () => {
    setBuying(true);
    magicPetsContract.methods
      .buy(tokenId)
      .send({
        from: account,
        value: priceToSet
      })
      .on("error", () => {
        setBuying(false);
      })
      .on("transactionHash", (txHash) => {
        toast({
          title: "Transaction sent",
          description: txHash,
          status: "info",
        });
      })
      .on("receipt", () => {
        setBuying(false);
        toast({
          title: "Success",
          description: "See you Pet on OpenSea",
          status: "success",
        });
      });
      update()
  };

  return (
    <Box
      role={"group"}
      p={8}
      maxW={"300px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
      mx={{
        base: "auto",
        md: 0,
      }}
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        height={"250px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 0,
          left: 0,
          backgroundImage: `url(${image})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={250}
          width={250}
          objectFit={"cover"}
          src={image}
        />
      </Box>
      <Stack pt={5} align={"center"}>
        <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
          {name}
        </Heading>
        <Text fontSize="md" fontFamily={"body"} minH="70px">
          {description}
        </Text>
        <Text fontSize="md" fontFamily={"body"}>
          Type: {(attributes.length > 1)? attributes[0].value : 'None'}
        </Text>
        <Text fontSize="md" fontFamily={"body"}>
          Power: {(attributes.length > 1)? attributes[1].value : 'None'}
        </Text>
        {onSale ? (
          <Flex justify={'space-around'}>
          <Center>
            <Text fontSize="md" fontFamily={"body"} mr={'15px'}>
            {price} Eth
            </Text>
          </Center>
          <Button isLoading={buying} onClick={buyPet} colorScheme="blue">
            Buy
          </Button>
          </Flex>
        ) : (
          <Button disabled={true}>Sold</Button>
        )
      }
      {(owner === account) && <Text fontSize="sm" fontFamily={"body"}> You own this Pet</Text>}
      </Stack>
    </Box>
  );
};

export default PetCard;
