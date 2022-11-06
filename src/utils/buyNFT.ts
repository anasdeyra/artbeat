import { showNotification } from "@mantine/notifications";
import { ethers } from "ethers";
import { NFT } from "../components/nft/NFTExploreCard";
import ABI from "./ABI.json";

export async function buyNFT(nft: NFT) {
  try {
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    //Pull the deployed contract instance
    const contract = new ethers.Contract(
      "0x2480aEA0FfABcF3bb8b92E6819B4201717f68BF4",
      ABI,
      signer
    );
    // @ts-ignore
    const salePrice = ethers.utils.parseUnits(nft.metadata.price, "ether");
    const transaction = await contract.executeSale(nft.tokenId, {
      value: salePrice,
    });
    await transaction.wait();

    showNotification({ message: "You successfully bought the NFT!" });
  } catch (e) {
    showNotification({
      message: "There was a problem buying NFt check the console",
      color: "red",
    });
    console.error(e);
  }
}
