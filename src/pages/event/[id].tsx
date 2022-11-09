import {
  Box,
  createStyles,
  Group,
  Text,
  Image,
  Title,
  SimpleGrid,
  Stack,
  TextInput,
  Button,
} from "@mantine/core";
import { useRouter } from "next/router";
import { BiBorderRadius } from "react-icons/bi";
import {
  FaClock,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMapPin,
  FaTicketAlt,
} from "react-icons/fa";

import { MdArrowBack } from "react-icons/md";

import EventCard from "../../components/EventCard";

const useStyles = createStyles((t) => ({
  container: {
    backgroundColor: "#111",
    width: "100%",
    color: "white",
  },
  imageContainer: {
    width: 700,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    gridTemplateRows: "repeat(8, 1fr)",
    gap: 16,
    [t.fn.smallerThan("md")]: { display: "flex", flexDirection: "column" },
  },
  img1: {
    gridArea: "1 / 1 / 9 / 6",
  },
  img2: {
    gridArea: " 5 / 6 / 9 / 9",
  },
  img3: {
    gridArea: "1 / 6 / 5 / 9",
  },
  overviewConatiner: {
    display: "flex",
    flexDirection: "row",
    gap: t.spacing.xl,
    [t.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  ticket: {
    border: "1px solid #C4811C",
    borderRadius: t.radius.lg,
    padding: t.spacing.xl,
    minWidth: 300,
    textAlign: "center",
    height: "min-content",
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
        <Title mt={"xl"}>Romane Statue Exhibition</Title>
        <Box className={classes.grid} mt={"xl"}>
          <Image
            height={420}
            className={classes.img1}
            radius={"md"}
            src="https://images.unsplash.com/photo-1526559881144-9df4bf3eb37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />

          <Image
            className={classes.img2}
            height={210 - 8}
            radius={"md"}
            src="https://images.unsplash.com/photo-1526559881144-9df4bf3eb37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />

          <Image
            className={classes.img3}
            height={210 - 8}
            radius={"md"}
            src="https://images.unsplash.com/photo-1526559881144-9df4bf3eb37a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />
        </Box>
      </Box>
      <Overview />
      <RecommendedEvents />
    </>
  );
}

function Overview() {
  const { classes } = useStyles();
  return (
    <Box pt={64} px={"xl"}>
      <Title size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Overview</span>
      </Title>
      <Box mt={48} className={classes.overviewConatiner}>
        <Stack>
          <Group>
            <FaMapMarkerAlt color="#111" size={24} />{" "}
            <Text color="#111" weight={600} size={"lg"}>
              Paris, France
            </Text>
          </Group>
          <Group align={"start"}>
            <FaClock color="#111" size={24} />{" "}
            <Stack spacing={0}>
              <Text color="#111" weight={600} size={"lg"}>
                Saturday 15 August 2022
              </Text>
              <Text size={"md"} color={"dimmed"}>
                07.00 AM - 11.00 AM
              </Text>
            </Stack>
            <Text mt={"md"} weight={500} size={"lg"}>
              In the world of the Ancient Greeks and Romans sculpture was one of
              the most important means of expression and communication. Every
              single statue, head and relief was produced with an eye to its
              specific purpose and message. In most cases the sculpture was set
              up in the public space, e.g. the city’s market place, burial
              ground, theatre and sanctuary. The multiple meanings and functions
              of sculpture in Antiquity can be experienced in the fourteen rooms
              which house Glyptoteket’s extensive collection of ancient
              sculpture from the Mediterranean world – primarily from Greece and
              the Roman Empire. The exhibition is a journey through a crucial
              chapter in European cultural history. From around 600 BCE when
              Greek large-scale sculpture emerged, to c. 400 CE the Roman
              Empire. When its form of government and religion, had to make way
              for Christianity and the Empire of Byzantium.
            </Text>
          </Group>
        </Stack>
        <Stack className={classes.ticket}>
          <Title color={"#C4811C"} order={2}>
            Get Your Ticket
          </Title>
          <TextInput
            placeholder="Tickets Quantity"
            icon={<FaTicketAlt size={24} color="#875A28" />}
            radius={"md"}
            mt={"xl"}
            type={"number"}
          />
          <Button radius={"md"}>Buy Ticket</Button>
        </Stack>
      </Box>
    </Box>
  );
}

function RecommendedEvents() {
  return (
    <Box py={64} px={"xl"}>
      <Title size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Recommended</span> Events
      </Title>
      <SimpleGrid
        mt={"xl"}
        cols={4}
        breakpoints={[
          { maxWidth: "lg", cols: 3 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
      >
        {[1, 1, 1, 1].map((_, i) => (
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
