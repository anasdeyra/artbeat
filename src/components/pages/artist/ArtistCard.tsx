import {
  Avatar,
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";
import { IoMdColorPalette } from "react-icons/io";
import NFTCard from "../../nft/NFTCard";

const useStyles = createStyles((t) => ({
  container: {
    borderRadius: 8,
    border: "1px solid #DDAB46",
    padding: 16,
    [t.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },
  artistSection: {
    [t.fn.smallerThan("sm")]: {
      alignSelf: "center",
    },

    maxWidth: 300,
    height: "100%",
  },
  artwokrsSection: {
    flexGrow: 1,
    [t.fn.largerThan("sm")]: {
      paddingLeft: 16,
      borderLeft: "1px solid #DDAB46",
    },
  },
}));

export default function ArtistCard() {
  const { classes } = useStyles();
  return (
    <Group py={"xl"} noWrap align={"stretch"} className={classes.container}>
      <ArtistSection />
      <ArtworkSection />
    </Group>
  );
}

function ArtistSection() {
  const { classes } = useStyles();
  return (
    <Stack className={classes.artistSection} align={"center"}>
      <Avatar
        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        size={180}
        radius={999}
      />
      <Text size={"xl"} weight={600}>
        Christan Gill
      </Text>
      <Text align="center">
        Hi, I’m Zack! I’ve always been passionate about art since I was a kid. I
        usually create oil-on-canvas paintings. Support me if you like my
        artworks!
      </Text>
      <Group mt={"xl"} sx={{ color: "#111" }} spacing={"xs"} align={"center"}>
        <IoMdColorPalette size={24} />
        <Text weight={500}>24 Artworks</Text>
      </Group>
      <Text variant="link" component={NextLink} href="/artist/id">
        See Details
      </Text>
    </Stack>
  );
}

function ArtworkSection() {
  const { classes } = useStyles();
  return (
    <Box className={classes.artwokrsSection}>
      <Title order={3}>
        <span style={{ color: "#C4811C" }}>Recent</span> Artworks
      </Title>
      <SimpleGrid
        spacing={"xl"}
        mt={"xl"}
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "md", cols: 1 },
        ]}
        sx={{ width: "100%" }}
        cols={3}
      >
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <NFTCard
            key={i}
            //@ts-ignore
            metadata={{
              artist: "Christan Gill",
              title: "The last war",
              image:
                "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80",
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
