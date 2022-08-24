import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import MagicPetsArtifact from "../../config/web3/artifacts/MagicPetsArtifact";

const { address, abi } = MagicPetsArtifact;

const useMagicPetsContract = () => {
  const { active, library, chainId } = useWeb3React();
  const magicPetsContract = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return magicPetsContract
};

export default useMagicPetsContract;
