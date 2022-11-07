import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useEffect, useState } from "react";

async function connect() {
  if (!window.ethereum)
    return showNotification({
      message: "A wallet was not detected",
      color: "red",
    });
  await window.ethereum.request({ method: "eth_requestAccounts" });

  const chainId = "0x405"; // BTT

  if (window.ethereum.networkVersion !== chainId) {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
      });
    } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "BitTorrent Chain Donau",
              chainId,
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
    if (
      window.ethereum &&
      window.ethereum.isConnected() &&
      window.ethereum.selectedAddress
    )
      setIsConnected(true);
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
