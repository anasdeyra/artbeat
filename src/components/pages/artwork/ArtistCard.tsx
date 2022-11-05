import { Avatar, Group, Stack, Text } from "@mantine/core";

export default function ArtistCard() {
  return (
    <Group align={"center"}>
      <Avatar
        radius={999}
        size={64}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAGia3COeBXxUXJ1K8G82_IlcYQqjkzYKZB53vl_v_7rroFHjb4A9diTKCf-cs9JTNro&usqp=CAU"
      />
      <Stack spacing={0}>
        <Text weight={"bold"}>Vincent Van Gogh</Text>
        <Text size={"sm"}>900 Artworks</Text>
      </Stack>
    </Group>
  );
}
