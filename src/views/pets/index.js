import { Grid } from "@chakra-ui/react";
import ListOfPets from "../../components/listOfPets";
import RequestAccess from "../../components/request-access";
import { useWeb3React } from "@web3-react/core";


const Pets = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
      <ListOfPets />
    </Grid>
  );
};

export default Pets;
