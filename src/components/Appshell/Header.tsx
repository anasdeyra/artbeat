import {
  Group,
  Header as H,
  createStyles,
  Text,
  Box,
  Image,
  Avatar,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import ConnectWallet from "../ConnectWallet";
import MainUserButton from "../MainUserButton/MainUserButton";

const useStyles = createStyles((t) => ({
  header: { backgroundColor: "transparent", position: "absolute" },
}));

export default function Header() {
  const { classes } = useStyles();
  const { pathname } = useRouter();
  const session = trpc.auth.getSession.useQuery();
  return (
    <H
      className={classes.header}
      withBorder={false}
      py={"md"}
      px="xl"
      height={0}
    >
      <Group position="apart">
        <NextLink href={"/"}>
          <Image width={39} height={52} src={"/logo.png"} />
        </NextLink>
        <Group spacing={40}>
          {LINKS.map((props, i) =>
            pathname === props.link ? (
              <Navitem isActive key={i} {...props} />
            ) : (
              <Navitem key={i} {...props} />
            )
          )}
        </Group>
        <Group spacing={"xl"}>
          <ConnectWallet />
          <MainUserButton />
        </Group>
      </Group>
    </H>
  );
}

function Navitem({
  label,
  link,
  isActive = false,
}: NavItemType & { isActive?: boolean }) {
  return (
    <Box sx={{ position: "relative", color: "white" }}>
      <Text component={NextLink} href={link}>
        {label}
      </Text>
      {isActive && (
        <Box
          sx={{
            height: 2,
            width: "70%",
            backgroundColor: "#C4811C",
            position: "absolute",
            right: 0,
          }}
        />
      )}
    </Box>
  );
}

interface NavItemType {
  label: string;
  link: string;
}

const LINKS: NavItemType[] = [
  { label: "Home", link: "/" },
  { label: "Artist", link: "/artist" },
  { label: "Event", link: "/event" },
  { label: "Museum", link: "/museum" },
  { label: "Explore", link: "/explore" },
];
