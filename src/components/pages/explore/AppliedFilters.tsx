import { Badge, Group, Text } from "@mantine/core";

export default function AppliedFilters() {
  return (
    <Group>
      <Text>Showing 1-12 from 115 Arts</Text>
      <Group spacing={"xs"}>
        <Badge variant="outline" color={"brand"}>
          Verified
        </Badge>
      </Group>
    </Group>
  );
}
