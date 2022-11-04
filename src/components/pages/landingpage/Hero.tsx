import {
  Image,
  createStyles,
  Overlay,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Box,
  Space,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import SearchInput from "./SearchInput";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
    position: "relative",
    backgroundColor: "#111",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <SimpleGrid px={155} pt={155 + 64} className={classes.container} cols={2}>
      <Overlay zIndex={0} opacity={0.6} color="#000" />
      <Stack align={"start"} sx={{ zIndex: 1 }}>
        <Title size={64}>
          The Art <br /> of Gifting
        </Title>
        <Text size={"md"}>
          Curated art marketplace that helps you discover <br /> and buy
          authentic artworks
        </Text>{" "}
        <Text
          variant="link"
          sx={{ color: "white" }}
          mt={"md"}
          weight={500}
          href={"/explore"}
          component={NextLink}
        >
          More Arts
        </Text>
        <Space mt={"xs"} />
        <SearchInput />
      </Stack>
      <Box
        sx={{
          placeSelf: "center",
          marginTop: -50,
        }}
      >
        <Image src="/ab2.png" />
      </Box>
    </SimpleGrid>
  );
}
