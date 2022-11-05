import {
  Box,
  createStyles,
  Group,
  SimpleGrid,
  Space,
  Stack,
} from "@mantine/core";
import NFTCard from "../components/nft/NFTCard";
import AppliedFilters from "../components/pages/explore/appliedFilters";
import Filters from "../components/pages/explore/Filters";
import Pagination from "../components/pages/explore/Pagination";
import TopFilters from "../components/pages/explore/topFilters";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1628432300911-cc9f392e47cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
    height: 96,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  },
  filtersContainer: {
    borderLeft: "1px solid #875A28",
    width: 300,
  },
}));

export default function artwork() {
  const { classes } = useStyles();
  return (
    <Box>
      <Box className={classes.banner} />
      <Group px={"xl"} align={"start"}>
        <Stack mt={"xl"} sx={{ flexGrow: 1 }}>
          <TopFilters />
          <AppliedFilters />
          <SimpleGrid sx={{ width: "full" }} cols={3}>
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </SimpleGrid>
          <Box sx={{ alignSelf: "end" }}>
            <Pagination />
          </Box>
        </Stack>
        <Stack align={"center"} className={classes.filtersContainer}>
          <Space mt="xl" />
          <Filters />
        </Stack>
      </Group>
    </Box>
  );
}
