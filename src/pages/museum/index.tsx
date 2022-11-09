import { Box, createStyles, Stack, Text, Title } from "@mantine/core";
import ArtistCard from "../../components/pages/artist/ArtistCard";
import MuseumCard from "../../components/pages/museum/MuseumCard";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/artists-section-banner.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    display: "grid",
    placeItems: "center",
    color: "white",
  },
}));

export default function Museum() {
  const { classes } = useStyles();
  return (
    <Box>
      <Box py={155} className={classes.banner}>
        <Box sx={{ textAlign: "center" }}>
          <Title size={48}>Meusems</Title>

          <Text>
            Showing a list of museums that own various magnificent art
            collections made by very talented artists
          </Text>
        </Box>
      </Box>

      <Title px={"xl"} my={"xl"} size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Meusems</span> List
      </Title>
      <Stack mt={32} spacing={48} mb={96} px={"xl"}>
        <MuseumCard />
        <MuseumCard />
        <MuseumCard />
      </Stack>
    </Box>
  );
}
