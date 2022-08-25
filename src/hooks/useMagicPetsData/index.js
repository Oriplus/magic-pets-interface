import { useCallback, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useMagicPetsContract from "../useMagicPetsContract";
import ParseURL from "../../utils/parseURL";

const getMagicPetData = async ({ magicPetsContract, tokenId }) => {
  const tokenURI = await magicPetsContract.methods.tokenURI(tokenId).call();
  const priceToSet = await magicPetsContract.methods.price().call();
  const { onSale } = await magicPetsContract.methods.Pets(tokenId).call();
  const  owner = await magicPetsContract.methods.ownerOf(tokenId).call();
  const price = (priceToSet / 1e18).toFixed(3);
  const responseMetadata = await fetch(ParseURL(tokenURI));
  let metadata = await responseMetadata.json();
  let { image } = metadata;
  image = ParseURL(image);
  metadata = { ...metadata, image };
  console.log(metadata)
  return {
    tokenId,
    owner,
    price,
    onSale,
    priceToSet,
    image,
    ...metadata,
  };
};

const useMagicPetsData = () => {
  const [pets, setPets] = useState([]);
  const { library } = useWeb3React();
  const [loading, setLoading] = useState(true);
  const magicPetsContract = useMagicPetsContract();

  const update = useCallback(async () => {
    console.log("aa");
    if (magicPetsContract) {
      setLoading(true);
      const totalSupply = await magicPetsContract.methods.totalSupply().call();
      const tokenIds = new Array(Number(totalSupply))
        .fill()
        .map((_, index) => index);
      const petPromise = tokenIds.map((tokenId) =>
        getMagicPetData({ magicPetsContract, tokenId })
      );
      const pets = await Promise.all(petPromise);
      setPets(pets);
      setLoading(false);
    }
  }, [magicPetsContract, library?.utils]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    loading,
    pets,
    update,
  };
};

export { useMagicPetsData };
