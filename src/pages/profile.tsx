import React, { useEffect } from "react";

import {
  Avatar,
  Box,
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
