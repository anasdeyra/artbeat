import { Badge, Group, Text } from "@mantine/core";
import { FiX } from "react-icons/fi";

export default function AppliedFilters() {
  return (
    <Group>
      <Text>Showing 1-12 from 115 Arts</Text>
      <Group spacing={"xs"}>
        <Badge variant="outline" color={"brand"}>
          Verified
          <FiX />
        </Badge>
      </Group>
    </Group>
  );
}
