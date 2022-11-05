import {
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Image,
  Input,
  Overlay,
  Paper,
  PasswordInput,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { NextLink } from "@mantine/next";
import { showNotification } from "@mantine/notifications";
import { GetServerSideProps } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiEnvelope, BiLock } from "react-icons/bi";
import ImageUpload from "../components/pages/post-nft/ImageUpload";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const useStyles = createStyles((t) => ({
  banner: {
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1566054757965-8c4085344c96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80')",
    height: 350,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "50%",
    position: "relative",
  },
  container: {
    maxWidth: 700,
    width: 700,
    marginTop: t.spacing.xl * 2,
    zIndex: 1,
  },
}));

export default function PostNFT() {
  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      title: "",
      artist: "",
      year: "",
      technique: "",
      size: "",
      type: "",
      edition: "",
      condition: "",
      frame: "",
      status: "",
      description: "",
      image: undefined,
      price: "",
    },
  });
  const imageUrl = form.values.image && URL.createObjectURL(form.values.image);

  return (
    <Box mb={96}>
      <Box className={classes.banner}>
        <Overlay color={"#111"} zIndex={1} opacity={0.75} />
      </Box>

      <Box>
        <Box mt={-200}>
          <Center>
            <Stack
              sx={{ color: "white", zIndex: 1 }}
              align={"center"}
              justify={"center"}
            >
              <Title>Post NFT</Title>
            </Stack>
          </Center>
          <Center>
            <Paper className={classes.container} shadow={"lg"} radius="lg">
              <Container p={24}>
                <form
                  onSubmit={form.onSubmit((data) => {
                    setIsLoading(true);
                    signIn("credentials", { redirect: false, ...data })
                      .then((e) => {
                        if (e.error === "CredentialsSignin")
                          return showNotification({
                            message: "Wrong Email and password combination!",
                            color: "red",
                          });
                        router.reload();
                      })
                      .finally(() => {
                        setIsLoading(false);
                      });
                  })}
                >
                  <Stack spacing={"xl"}>
                    <TextInput
                      required
                      {...form.getInputProps("title")}
                      type="text"
                      size="md"
                      label="Title"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("artist")}
                      type="text"
                      size="md"
                      label="Artist"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("year")}
                      type="text"
                      size="md"
                      label="Year of making"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("technique")}
                      type="text"
                      size="md"
                      label="Technique"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("size")}
                      type="text"
                      size="md"
                      label="Size"
                    />
                    <Select
                      required
                      {...form.getInputProps("type")}
                      type="text"
                      size="md"
                      label="Type"
                      data={["Painting", "Sculpture", "Photograph"]}
                      sx={{ maxWidth: 300 }}
                    />
                    <TextInput
                      required
                      {...form.getInputProps("edition")}
                      type="text"
                      size="md"
                      label="Edition"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("condition")}
                      type="text"
                      size="md"
                      label="Condition"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("frame")}
                      type="text"
                      size="md"
                      label="Frame"
                    />
                    <TextInput
                      required
                      {...form.getInputProps("status")}
                      type="text"
                      size="md"
                      label="Status"
                    />
                    <Textarea
                      required
                      {...form.getInputProps("description")}
                      type="text"
                      size="md"
                      label="Description"
                      minRows={3}
                    />

                    <Input.Wrapper required>
                      <Input.Label mb={4}>Image</Input.Label>
                      <ImageUpload setFieldValue={form.setFieldValue} />

                      {imageUrl && (
                        <Image
                          fit="scale-down"
                          height={160}
                          src={imageUrl}
                          imageProps={{
                            onLoad: () => URL.revokeObjectURL(imageUrl),
                          }}
                        />
                      )}
                    </Input.Wrapper>

                    <TextInput
                      required
                      {...form.getInputProps("price")}
                      type="text"
                      size="md"
                      label="Price"
                    />

                    <Button
                      mt={"xl"}
                      loading={isLoading}
                      type="submit"
                      color={"brand"}
                    >
                      List NFT
                    </Button>
                  </Stack>
                </form>
              </Container>
            </Paper>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);
  //if not admin redirect
  if (session?.user?.role !== "admin")
    return {
      redirect: { destination: "/", permanent: false },
      props: {},
    };
  return { props: {} };
};
