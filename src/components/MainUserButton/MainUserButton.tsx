import { ActionIcon, Menu } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { signOut } from "next-auth/react";
import { BiUser } from "react-icons/bi";
import { trpc } from "../../utils/trpc";

export default function MainUserButton() {
  const { data } = trpc.auth.getSession.useQuery();
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon color={undefined} variant="transparent" size={"lg"}>
          <BiUser color="white" size={32} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {data ? (
          <>
            <Menu.Item href={"/profile"} component={NextLink}>
              Profile
            </Menu.Item>
            <Menu.Item href={"/settings"} component={NextLink}>
              Settings
            </Menu.Item>
            <Menu.Divider></Menu.Divider>

            <Menu.Item
              color={"red"}
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item href={"/signup"} component={NextLink}>
              Sign Up
            </Menu.Item>
            <Menu.Item href={"/signin"} component={NextLink}>
              Sign In
            </Menu.Item>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
