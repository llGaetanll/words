import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/util/theme";
import createEmotionCache from "../util/createEmotionCache";
import Head from "next/head";

import { inter, roboto } from "@/util/fonts";
import "@/styles/globals.css";
import { CacheProvider } from "@emotion/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <style jsx global>{`
        :root {
          --roboto: ${roboto.style.fontFamily};
          --inter: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Math Trainer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
