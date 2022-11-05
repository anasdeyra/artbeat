import {
  Box,
  createStyles,
  Group,
  Text,
  Image,
  Title,
  Stack,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { useRouter } from "next/router";

import { MdArrowBack } from "react-icons/md";
import NFTExploreCard from "../../components/nft/NFTExploreCard";
import ArtistCard from "../../components/pages/artwork/ArtistCard";
import Property from "../../components/pages/artwork/Property";

const useStyles = createStyles((t) => ({
  container: {
    backgroundColor: "#111",
    width: "100%",
    color: "white",
  },
  imageContainer: {
    width: 700,
  },
}));

export default function Artwork() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <>
      <Box px={"xl"} pb={64} className={classes.container} pt={96 + 24}>
        <Group
          onClick={() => {
            router.back();
          }}
          spacing={"xs"}
          sx={{
            color: "#DDAB46",
            cursor: "pointer",
          }}
        >
          <MdArrowBack size={24} />
          <Text variant="link">Back</Text>
        </Group>
        <Group grow align={"start"} spacing={"xl"} mt={"xl"}>
          <Stack className={classes.imageContainer} spacing={48}>
            <Image radius={"md"} src="/artwork.png" />
            <ArtistCard />
          </Stack>
          <Stack>
            <Title>The Starry Night</Title>
            <Text>
              The Starry Night is an oil-on-canvas painting by the Dutch
              Post-Impressionist painter Vincent van Gogh. Painted in June 1889,
              it depicts the view from the east-facing window of his asylum room
              at Saint-Rémy-de-Provence, just before sunrise, with the addition
              of an imaginary village.
            </Text>
            <SimpleGrid mt={"xl"} cols={2}>
              <Property label="Type" value="Painting" />
              <Property label="Dimentions" value="200 x 100 CM" />
              <Property label="Technique" value="Watercolor" />
              <Property label="Year" value="2020" />
            </SimpleGrid>
            <Text mt={"xl"} size={24} weight={"bold"}>
              Price: 500$
            </Text>
            <Button size="lg">Buy now</Button>
          </Stack>
        </Group>
      </Box>
      <Box py={64} px={"xl"}>
        <Title size={36} order={2}>
          <span style={{ color: "#C4811C" }}>Recommended</span> Artworks
        </Title>
        <SimpleGrid spacing={"lg"} mt={"xl"} cols={4}>
          <NFTExploreCard />
          <NFTExploreCard />
          <NFTExploreCard />
          <NFTExploreCard />
        </SimpleGrid>
      </Box>
    </>
  );
}
