import {
  Box,
  createStyles,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { YOUTUBE_VIDEO } from "../../../const";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/landing-banner.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    position: "relative",
    color: "white",
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <Box px="xl" className={classes.banner} py={96}>
      <SimpleGrid
        sx={{ placeItems: "center" }}
        cols={2}
        breakpoints={[{ maxWidth: "md", cols: 1, spacing: "xl" }]}
      >
        <iframe height={327} width={466} src={YOUTUBE_VIDEO} />
        <Stack>
          <Title>NFT Certificate for Artwork</Title>
          <Text>
            ArtBeat uses blockchain technology and NFT to create the certificate
            of authenticity for artworks. Every certificates has been tokenized
            to prove the legitimacy of the art.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
