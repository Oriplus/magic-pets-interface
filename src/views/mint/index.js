import { Center } from "@chakra-ui/react";
import FormPet from "../../components/form";
import RequestAccess from "../../components/request-access";
import { useWeb3React } from "@web3-react/core";

const Mint = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <Center>
      <FormPet />
    </Center>
  );
};

export default Mint;
