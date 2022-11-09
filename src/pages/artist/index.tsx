import { Box, createStyles, Stack, Text, Title } from "@mantine/core";
import ArtistCard from "../../components/pages/artist/ArtistCard";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/artist-banner.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    display: "grid",
    placeItems: "center",
    color: "white",
  },
}));

export default function Artist() {
  const { classes } = useStyles();
  return (
    <Box>
      <Box py={155} className={classes.banner}>
        <Box sx={{ textAlign: "center" }}>
          <Title size={48}>Artist</Title>

          <Text>Showing a list of talented artists all over the world</Text>
        </Box>
      </Box>

      <Title px={"xl"} my={"xl"} size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Artist</span> List
      </Title>
      <Stack mt={32} spacing={48} mb={96} px={"xl"}>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </Stack>
    </Box>
  );
}
