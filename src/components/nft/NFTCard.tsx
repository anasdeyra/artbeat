import { Avatar, Card, Group, Image, Text, Title } from "@mantine/core";
import { MdVerified } from "react-icons/md";

export default function NFTCard() {
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
      <Group spacing={"xs"} mt={"xs"}>
        <Text size={"sm"}>Art by:</Text>
        <Group spacing={"xs"}>
          <Avatar
            src="https://images.unsplash.com/photo-1505962577034-fc157cf5b274?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            radius={999}
            size={24}
          />{" "}
          <Text size={"sm"}>Anas Deyra</Text> <MdVerified color="#00f" />
        </Group>
      </Group>
    </Card>
  );
}
