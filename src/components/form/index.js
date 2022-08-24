import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
  Textarea,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import createFileIPFS from "../../utils/createFileIPFS";
import useMagicPetsContract from "../../hooks/useMagicPetsContract";
import { useWeb3React } from "@web3-react/core";
import MinterAccess from "../minterAccess";

export default function HookForm() {
  const magicPetsContract = useMagicPetsContract();
  const { account } = useWeb3React();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [hasMinterAccess, setHasMinterAccess] = useState(false);
  console.log(image);
  const toast = useToast();

  const uploadFile = async () => {
    const attributes = [
      { "trait-type": "Type", value: value1 },
      { "trait-type": "Power", value: value2 },
    ];
    try {
      if (!validImgFile()) {
        throw "Error Image format";
      }
      const URI = await createFileIPFS(image, name, description, attributes);
      if (URI === "") {
        throw "No URI exits";
      }
      mint(URI);
    } catch (error) {
      toast({
        title: "Error Uploading File",
        description: error,
        status: "error",
      });
      console.error(error);
    }
  };

  const validImgFile = () => {
    const type = ["image/jpeg", "image/png", "image/gif"].includes(image?.type);
    const size = image?.size < 1000000;

    if (!type || !size) {
      return false;
    }
    return true;
  };
  const getAccess = useCallback(async () => {
    if (magicPetsContract) {
      const minterRole = await magicPetsContract.methods.MINTER_ROLE().call();
      const isMinter = await magicPetsContract.methods
        .hasRole(minterRole, account)
        .call();
      setHasMinterAccess(isMinter);
    }
  }, [magicPetsContract, account]);

  useEffect(() => {
    getAccess();
  }, [getAccess]);

  const mint = (URI) => {
    magicPetsContract.methods
      .safeMint(URI)
      .send({
        from: account,
      })
      .on("transactionHash", (txHash) => {
        toast({
          title: "",
          description: txHash,
          status: "info",
        });
      })
      .on("receipt", () => {
        toast({
          title: "Exitosa",
          description: "Transacción confirmada",
          status: "success",
        });
      })
      .on("error", (error) => {
        toast({
          title: "Transacción fallida",
          description: error.message,
          status: "error",
        });
      });
  };

  if (!hasMinterAccess) return <MinterAccess />;

  return (
    <form onSubmit={handleSubmit(uploadFile)}>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          placeholder="Name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 4" },
          })}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <Text fontSize="sm" color="red">
            {errors.name.message}
          </Text>
        )}
        <FormLabel htmlFor="description">Description</FormLabel>
        <Textarea
          id="description"
          placeholder="Description"
          {...register("description", {
            required: "This is required",
          })}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <Text fontSize="sm" color="red">
            {errors.description.message}
          </Text>
        )}
        <FormLabel htmlFor="type">Type</FormLabel>

        <Input
          id="type"
          placeholder="Type"
          {...register("type", {
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 2" },
          })}
          onChange={(e) => setValue1(e.target.value)}
        />
        {errors.type && (
          <Text fontSize="sm" color="red">
            {errors.type.message}
          </Text>
        )}
        <FormLabel htmlFor="power">Power</FormLabel>

        <Input
          id="power"
          placeholder="Power"
          mb={"10px"}
          {...register("power", {
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 2" },
          })}
          onChange={(e) => setValue2(e.target.value)}
        />
        {errors.power && (
          <Text fontSize="sm" color="red">
            {errors.power.message}
          </Text>
        )}
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </FormControl>
      <Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
