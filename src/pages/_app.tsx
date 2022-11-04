import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import Appshell from "../components/Appshell/Appshell";
import theme from "../utils/theme";
import { Global } from "@emotion/react";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Global
          styles={[
            `@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');`,
          ]}
        />
        <Appshell>
          <Component {...pageProps} />
        </Appshell>
      </MantineProvider>
    </>
  );
}
