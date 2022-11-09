import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import { BiUser } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import NFTCard from "../../components/nft/NFTCard";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/profile-banner.png')",
    height: 281,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  detailsWrapper: {
    position: "absolute",
    alignSelf: "center",
    [t.fn.smallerThan("md")]: {
      flexDirection: "column",
      marginTop: -100,
      position: "relative",
      marginLeft: 16,
      marginRight: 16,
    },
  },
  detailsContainer: {
    [t.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: t.spacing.xl,
    marginTop: 196,
    [t.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      marginTop: 72,
    },
  },
  awardsContainer: {
    width: 300,
    border: "1px solid #C4811C",
    borderRadius: 16,
    padding: t.spacing.md,
    [t.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },
}));

export default function ArtistPage() {
  const { classes } = useStyles();

  return (
    <Box mb={96}>
      <Box className={classes.banner} />
      <ProfileInfo />

      <Box px={"xl"} className={classes.container}>
        <Artworks />
        <Awards />
      </Box>
    </Box>
  );
}

function Artworks() {
  const { classes } = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Title color={"#C4811C"} mb={"xl"} size={36} order={2}>
        Artworks
      </Title>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: "lg", cols: 2 },
          { maxWidth: "xs", cols: 1 },
        ]}
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

function Awards() {
  const { classes } = useStyles();
  return (
    <Box className={classes.awardsContainer}>
      <Title order={2}>Awards</Title>
      <Timeline active={999} mt={"xl"}>
        <Timeline.Item>
          <Title order={4} color={"brand"} weight={600}>
            Future Generation Art Prize 2020
          </Title>
        </Timeline.Item>
        <Timeline.Item>
          <Title order={4} color={"brand"} weight={600}>
            Astethica Art Prize 2008
          </Title>
        </Timeline.Item>
        <Timeline.Item>
          <Title order={4} color={"brand"} weight={600}>
            Hugo Boss Prize
          </Title>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}

function ProfileInfo() {
  const { classes } = useStyles();

  return (
    <Center>
      {" "}
      <Paper
        mx={"auto"}
        radius={"lg"}
        p="xl"
        shadow={"xl"}
        mt={-24}
        className={classes.detailsWrapper}
      >
        <Group className={classes.detailsContainer} noWrap>
          <Stack align={"center"}>
            <Avatar
              radius={999}
              src="https://images.unsplash.com/photo-1505962577034-fc157cf5b274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              size={120}
            />

            <Stack align={"center"} spacing="xs">
              <Text size={"lg"} weight={600}>
                Zack Efron
              </Text>
              <Button size="xs" radius={"md"} variant="outline">
                Follow
              </Button>
            </Stack>
          </Stack>
          <Text sx={{ maxWidth: 500 }} align="center">
            Hi, I’m Zack! I’ve always been passionate about art since I was a
            kid. I usually create oil-on-canvas paintings. Support me if you
            like my artworks!
          </Text>

          <Stack spacing={"xs"}>
            <Group spacing={"xs"}>
              <BiUser color="#111" size={24} />
              <Text sx={{ color: "#111" }} weight={500}>
                500 Followers
              </Text>
            </Group>
            <Group spacing={"xs"}>
              <IoMdColorPalette color="#111" size={24} />
              <Text sx={{ color: "#111" }} weight={500}>
                24 Artworks
              </Text>
            </Group>
            <Group position="apart">
              <ActionIcon variant="transparent" color={"gray"}>
                <FaTwitter size={24} />
              </ActionIcon>
              <ActionIcon variant="transparent" color={"gray"}>
                <FaFacebook size={24} />
              </ActionIcon>
              <ActionIcon variant="transparent" color={"gray"}>
                <FaInstagram size={24} />
              </ActionIcon>
            </Group>
          </Stack>
        </Group>
      </Paper>
    </Center>
  );
}
