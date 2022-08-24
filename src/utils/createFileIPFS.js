import axios from "axios";
const createFileIPFS = async (fileImg, name, description, attributes) => {
  try {
    console.log("init load image");
    const formData = new FormData();
    formData.append("file", fileImg);

    const resFile = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
      data: formData,
      headers: {
        pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
        pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
        "Content-Type": "multipart/form-data",
      },
    });

    const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
    const hashToken = await createJson(ImgHash, name, description, attributes);
    return hashToken;
  } catch (error) {
    console.error("Error sending File to IPFS: ", error);
    return "";
  }
};

const createJson = async (ImgHash, name, description, attributes) => {
  try {
    const resJSON = await axios({
      method: "post",
      url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
      data: {
        name: name,
        description: description,
        image: ImgHash,
        attributes: attributes,
      },
      headers: {
        pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
        pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
      },
    });

    const tokenURI = `ipfs://${resJSON.data.IpfsHash}`;
    return tokenURI;
  } catch (error) {
    console.error("JSON to IPFS: ");
    console.error(error);
    return "";
  }
};
export default createFileIPFS;
