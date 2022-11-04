export async function changeNetwrok() {
  try {
    // @ts-ignore
    await ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x405" }],
    });
  } catch (switchError: any) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        // @ts-ignore
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x405",
              chainName: "BitTorrent Chain Donau",
              rpcUrls: [": https://pre-rpc.bt.io/"],
              blockExplorerUrls: ["https://testscan.bt.io"],
              iconUrls: ["https://static.bt.io/production/logo/1002000.png"],
              nativeCurrency: {
                name: "BitTorrent",
                symbol: "BTT", // 2-6 characters long
                decimals: 18,
              },
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }
}
