import {
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Space,
  Stack,
} from "@mantine/core";
import NFTExploreCard from "../components/nft/NFTExploreCard";
import AppliedFilters from "../components/pages/explore/AppliedFilters";
import Filters from "../components/pages/explore/Filters";
import Pagination from "../components/pages/explore/Pagination";
import TopFilters from "../components/pages/explore/TopFilters";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage: "url('/explore-banner.jpg')",
    height: 96,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  },
  filtersContainer: {
    borderLeft: "1px solid #875A28",
    width: 300,
    height: "100%",
  },
}));

export default function Explore() {
  const { classes } = useStyles();
  return (
    <Box>
      <Box className={classes.banner} />
      <Group spacing={"xl"} px={"xl"} align={"start"}>
        <Stack spacing={"xl"} mt={"xl"} style={{ flexGrow: 1 }}>
          <TopFilters />
          <AppliedFilters />
          <SimpleGrid mt={"md"} spacing={"xl"} sx={{ width: "full" }} cols={3}>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
              <NFTExploreCard key={i} />
            ))}
          </SimpleGrid>
          <Box mt={"xl"} sx={{ alignSelf: "end" }}>
            <Pagination active={1} pageCount={9} />
          </Box>
        </Stack>
        <Stack
          pb={48}
          px={"xl"}
          align={"center"}
          className={classes.filtersContainer}
        >
          <Space mt="xl" />
          <Filters />
        </Stack>
      </Group>
    </Box>
  );
}
