import {
  Box,
  createStyles,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import EventCard from "../../components/EventCard";
import NFTCard from "../../components/nft/NFTCard";
import NFTExploreCard from "../../components/nft/NFTExploreCard";
import ArtistCard from "../../components/pages/artist/ArtistCard";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/event-banner.jpg')",
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
          <Title size={48}>Events</Title>

          <Text>
            Showing a list of ongoing and upcoming exhibition events all over
            the world
          </Text>
        </Box>
      </Box>

      <Title px={"xl"} my={"xl"} size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Newest</span> Events
      </Title>
      <SimpleGrid
        mb={96}
        cols={4}
        breakpoints={[
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
        px={"xl"}
      >
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <EventCard
            key={i}
            price={"500"}
            details="07.00 pm | Paris, France"
            image="https://images.unsplash.com/photo-1508997449629-303059a039c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Roman Statue Exhibition"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
