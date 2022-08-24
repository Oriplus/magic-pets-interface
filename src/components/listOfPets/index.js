import Loading from "../loading";
import { useMagicPetsData } from "../../hooks/useMagicPetsData";
import PetCard from "../petCard";
import { GridItem } from "@chakra-ui/react";

const ListOfPets = () => {
  const { pets, loading, update } = useMagicPetsData();
  return (
    <>
      {loading ? (
        <GridItem colSpan={4}>
          <Loading></Loading>
        </GridItem>
      ) : (
        pets.map(
          ({
            name,
            description,
            image,
            tokenId,
            price,
            onSale,
            priceToSet,
            owner,
            attributes
          }) => (
            <PetCard
              key={tokenId}
              name={name}
              description={description}
              image={image}
              tokenId={tokenId}
              price={price}
              onSale={onSale}
              priceToSet={priceToSet}
              update={update}
              owner={owner}
              attributes= {attributes}
            />
          )
        )
      )}
    </>
  );
};

export default ListOfPets;
