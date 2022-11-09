import { Carousel } from "@mantine/carousel";
import { Box, createStyles, Group, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import CustomCarousel from "./CustomCarousel";
import MuseumCard from "./MuseumCard";

const useStyles = createStyles((t) => ({
  container: { position: "relative" },
  filter: {
    position: "absolute",
    alignSelf: "center",
  },
}));

export default function MuseumSection() {
  return (
    <Box my={96} px={"xl"}>
      <Group position="apart">
        <Title my={"xl"} size={36} order={2}>
          <span style={{ color: "#C4811C" }}>Museums</span>
        </Title>
        <Text
          sx={{ color: "#C4811C" }}
          component={NextLink}
          href="/museums"
          variant="link"
        >
          See All
        </Text>
      </Group>
      <CustomCarousel>
        <Carousel.Slide>
          <MuseumCard
            name="Museum de Louvre"
            location="Rue de Rivoli, 75001 Paris, France"
            image="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <MuseumCard
            name="Museum de Louvre"
            location="Rue de Rivoli, 75001 Paris, France"
            image="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <MuseumCard
            name="Museum de Louvre"
            location="Rue de Rivoli, 75001 Paris, France"
            image="https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </Carousel.Slide>
      </CustomCarousel>
    </Box>
  );
}
