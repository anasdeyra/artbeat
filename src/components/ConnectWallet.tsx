import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useEffect, useState } from "react";
import ethers from "ethers";

async function connect() {
  if (!window.ethereum)
    return showNotification({
      message: "A wallet was not detected",
      color: "red",
    });
  await window.ethereum.enable();
  const chainId = 1029; // BTT

  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.utils.hexValue(chainId) }],
      });
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "BitTorrent Chain Donau",
              chainId: ethers.utils.hexValue(chainId),
              nativeCurrency: { name: "BTT", decimals: 18, symbol: "BTT" },
              rpcUrls: ["https://pre-rpc.bt.io/"],
              blockExplorerUrls: ["https://testscan.bt.io"],
            },
          ],
        });
      }
    }
  }
}

export default function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  // const [isConnecting, setIsConnecting] = useState(false);
  useEffect(() => {
    if (window.ethereum && window.ethereum._addresses[0]) setIsConnected(true);
  }, []);
  return (
    <Button
      onClick={() => {
        connect();
      }}
      variant="white"
      color={"dark"}
      radius={"xl"}
    >
      {isConnected ? "Connected" : "Connect Wallet"}
    </Button>
  );
}
