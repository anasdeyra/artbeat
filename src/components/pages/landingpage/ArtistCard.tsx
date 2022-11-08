import { Avatar, Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import React from "react";
import { MdVerified } from "react-icons/md";

export default function ArtistCard({ bgImage, image, name }: Props) {
  return (
    <Card component={NextLink} href={`/artist/${name}`}>
      <Card.Section>
        <Image height={160} src={bgImage} />
      </Card.Section>
      <Stack spacing={"xs"} align={"center"}>
        <Avatar
          sx={{ border: "4px solid white" }}
          mt={-48}
          radius={999}
          size="xl"
          src={image}
        />
        <Group spacing={"xs"}>
          <Text weight={600}>{name}</Text> <MdVerified color="#0DBBFC" />
        </Group>
      </Stack>
    </Card>
  );
}

interface Props {
  name: string;
  image: string;
  bgImage: string;
}
