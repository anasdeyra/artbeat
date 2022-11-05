import React, { useEffect } from "react";
import ABI from "../utils/ABI.json";

import Web3 from "web3";
import {
  Avatar,
  Box,
  Container,
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IoMdColorPalette } from "react-icons/io";
import { NextLink } from "@mantine/next";
import NFTCard from "../components/nft/NFTCard";

// async function getMyNFTs() {
//   try {
//     const web3 = new Web3(window.ethereum);
//     await window.ethereum.enable();
//     const chainId = 1029; // BTT

//     if (window.ethereum.networkVersion !== chainId) {
//       try {
//         await window.ethereum.request({
//           method: "wallet_switchEthereumChain",
//           params: [{ chainId: web3.utils.toHex(chainId) }],
//         });
//       } catch (err) {
//         // This error code indicates that the chain has not been added to MetaMask
//         if (err.code === 4902) {
//           await window.ethereum.request({
//             method: "wallet_addEthereumChain",
//             params: [
//               {
//                 chainName: "BitTorrent Chain Donau",
//                 chainId: web3.utils.toHex(chainId),
//                 nativeCurrency: { name: "BTT", decimals: 18, symbol: "BTT" },
//                 rpcUrls: ["https://pre-rpc.bt.io/"],
//                 blockExplorerUrls: ["https://testscan.bt.io"],
//               },
//             ],
//           });
//         }
//       }
//     }

//     const contract = new web3.eth.Contract(
//       ABI,
//       "0x2480aEA0FfABcF3bb8b92E6819B4201717f68BF4"
//     );
//     const myNfts = await contract.methods.getAllNFTs.call().call();
//     console.log(myNfts);
//   } catch {}
// }

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/profile-banner.png')",
    height: 281,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default function Profile() {
  const { classes } = useStyles();
  // useEffect(() => {}, [getMyNFTs()]);

  return (
    <Box mb={96}>
      <Box className={classes.banner} />
      <Group spacing={48} mt={24} align={"start"} px={"xl"}>
        <Stack mt={-124} spacing={48}>
          <Paper p={24} radius={"lg"} shadow={"md"}>
            <Stack
              mb={"xl"}
              spacing={"xs"}
              sx={{ width: 300 }}
              align={"center"}
            >
              <Avatar
                radius={999}
                src="https://images.unsplash.com/photo-1505962577034-fc157cf5b274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                size={140}
              />
              <Title mt={"xl"} order={2} color="brand">
                Zack Afron
              </Title>
              <Text color={"muted"} align="center">
                Hi, I’m Zack! I’ve always been passionate about art since I was
                a kid. I usually create oil-on-canvas paintings. Support me if
                you like my artworks!
              </Text>
              <Title color={"#111"} mt={"xl"} order={4}>
                Total Collection
              </Title>
              <Group sx={{ color: "#111" }} spacing={"xs"} align={"center"}>
                <IoMdColorPalette size={24} />
                <Text weight={500}>4 Artworks</Text>
              </Group>
            </Stack>
          </Paper>
          <Text
            align="center"
            component={NextLink}
            href="/#"
            weight={500}
            variant="link"
            color={"brand"}
          >
            Request to Ship Your Art{" "}
          </Text>
        </Stack>

        <Stack sx={{ flexGrow: 1 }}>
          <Title color="brand" order={1}>
            My <span style={{ color: "#111" }}>collection</span>
          </Title>
          <SimpleGrid mt={"xl"} sx={{ width: "full" }} cols={3}>
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </SimpleGrid>
        </Stack>
      </Group>
    </Box>
  );
}
