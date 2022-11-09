import {
  Avatar,
  Box,
  createStyles,
  Group,
  Image,
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
  museumSection: {
    [t.fn.smallerThan("sm")]: {
      alignSelf: "center",
      width: "100%",
      maxWidth: "9000px",
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

export default function MuseumCard() {
  const { classes } = useStyles();
  return (
    <Group py={"xl"} noWrap align={"stretch"} className={classes.container}>
      <MuseumSection />
      <ArtworkSection />
    </Group>
  );
}

function MuseumSection() {
  const { classes } = useStyles();
  return (
    <Stack className={classes.museumSection} align={"center"}>
      <Image
        src="https://images.unsplash.com/photo-1512075021972-fd248fb21ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        height={250}
        width={"100%"}
        radius="md"
      />
      <Text size={"xl"} align="center" weight={600}>
        Louvre Museum
      </Text>
      <Text align="center">Rue de Rivoli, 75001 Paris, France</Text>

      <Text variant="link" component={NextLink} href="/museum/id">
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
        <span style={{ color: "#C4811C" }}>Recent</span> Collections
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
