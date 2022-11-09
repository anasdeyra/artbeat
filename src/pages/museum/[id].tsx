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
  FaAddressBook,
  FaClock,
  FaGlobe,
  FaMapMarker,
  FaMapMarkerAlt,
  FaMapPin,
  FaTicketAlt,
} from "react-icons/fa";

import { MdArrowBack } from "react-icons/md";

import EventCard from "../../components/EventCard";
import NFTCard from "../../components/nft/NFTCard";
import NFTExploreCard from "../../components/nft/NFTExploreCard";

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
}));

export default function Museum() {
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
        <Title mt={"xl"}>Louvre Museum</Title>
        <Box className={classes.grid} mt={"xl"}>
          <Image
            height={420}
            className={classes.img1}
            radius={"md"}
            src="https://images.unsplash.com/photo-1512075021972-fd248fb21ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />

          <Image
            className={classes.img2}
            height={210 - 8}
            radius={"md"}
            src="https://images.unsplash.com/photo-1512075021972-fd248fb21ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />

          <Image
            className={classes.img3}
            height={210 - 8}
            radius={"md"}
            src="https://images.unsplash.com/photo-1512075021972-fd248fb21ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
      <Box mt={"xl"} className={classes.overviewConatiner}>
        <Stack>
          <Text mt={"md"} weight={500} size={"lg"}>
            In the world of the Ancient Greeks and Romans sculpture was one of
            the most important means of expression and communication. Every
            single statue, head and relief was produced with an eye to its
            specific purpose and message. In most cases the sculpture was set up
            in the public space, e.g. the city’s market place, burial ground,
            theatre and sanctuary. The multiple meanings and functions of
            sculpture in Antiquity can be experienced in the fourteen rooms
            which house Glyptoteket’s extensive collection of ancient sculpture
            from the Mediterranean world – primarily from Greece and the Roman
            Empire. The exhibition is a journey through a crucial chapter in
            European cultural history. From around 600 BCE when Greek
            large-scale sculpture emerged, to c. 400 CE the Roman Empire. When
            its form of government and religion, had to make way for
            Christianity and the Empire of Byzantium.
          </Text>
          <Group noWrap mt={48}>
            <FaMapMarkerAlt color="#111" size={24} />{" "}
            <Text color="#111" weight={600} size={"lg"}>
              Rue de Rivoli, 75001 Paris, France
            </Text>
          </Group>
          <Group noWrap>
            <FaAddressBook color="#111" size={24} />{" "}
            <Text color="#111" weight={600} size={"lg"}>
              +31 20 570 5200
            </Text>
          </Group>
          <Group noWrap>
            <FaGlobe color="#111" size={24} />{" "}
            <Text color="#111" weight={600} size={"lg"}>
              https://www.louvre.fr
            </Text>
          </Group>
        </Stack>
      </Box>
    </Box>
  );
}

function RecommendedEvents() {
  return (
    <Box py={64} px={"xl"}>
      <Title size={36} order={2}>
        <span style={{ color: "#C4811C" }}>Recommended</span> Collections
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
          <NFTExploreCard
            key={i}
            //@ts-ignore
            price="500"
            //@ts-ignore
            tokenId={5}
            //@ts-ignore
            metadata={{
              artist: "Leonardo da Vinci",
              image:
                "data:image/jpeg;base64,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",
            }}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
