import { ActionIcon, Menu } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { trpc } from "../../utils/trpc";

export default function MainUserButton() {
  const { data } = trpc.auth.getSession.useQuery();
  const { pathname } = useRouter();
  return (
    <Menu>
      <Menu.Target>
        <ActionIcon variant="transparent" size={"lg"}>
          <BiUser
            color={pathname === "/profile" ? "#875A28" : "white"}
            size={32}
          />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {data ? (
          <>
            <Menu.Item href={"/profile"} component={NextLink}>
              Profile
            </Menu.Item>
            <Menu.Item>Settings</Menu.Item>
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
