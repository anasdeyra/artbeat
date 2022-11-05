import { Button, Card, Group, Image, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";

export default function NFTExploreCard() {
  return (
    <Card shadow="sm" p="sm" radius="md">
      <Card.Section>
        <Image
          src={`https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80`}
          height={160}
        />
      </Card.Section>
      <Title mt={"xl"} color={"brand"} order={3}>
        The Last War
      </Title>
      <Text mt={4} size={"sm"}>
        Art by: Viencent Van Gogh
      </Text>
      <Group mt={"lg"} position="apart">
        <Text weight={"bold"}>500$</Text>
        <Button component={NextLink} href="/artwork/100" size="xs">
          Details
        </Button>
      </Group>
    </Card>
  );
}
