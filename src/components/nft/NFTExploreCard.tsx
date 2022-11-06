import { Button, Card, Group, Image, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";

export default function NFTExploreCard({ metadata, price, tokenId }: NFT) {
  return (
    <Card shadow="sm" p="sm" radius="md">
      <Card.Section>
        <Image fit="contain" src={metadata.image} height={160} />
      </Card.Section>
      <Title mt={"xl"} color={"brand"} size={18} order={3}>
        {metadata.title}
      </Title>
      <Text mt={4} size={"sm"}>
        Art by: {metadata.artist}
      </Text>
      <Group mt={"lg"} position="apart">
        <Text weight={"bold"}>{price} BBT</Text>
        <Button component={NextLink} href={`/artwork/${tokenId}`} size="xs">
          Details
        </Button>
      </Group>
    </Card>
  );
}

export interface NFTMetadata {
  title: string;
  artist: string;
  year: string;
  technique: string;
  size: string;
  type: string;
  edition: string;
  condition: string;
  frame: string;
  status: string;
  description: string;
  image: string;
  price: string;
}

export interface NFT {
  price: any;
  tokenId: any;
  seller: any;
  owner: any;
  metadata: NFTMetadata;
}
