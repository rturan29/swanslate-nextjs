import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import { store } from "../redux/store";
import React, { useEffect } from "react";
// import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../lib/theme";
import Head from "next/head";
import Script from "next/script";


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    (globalThis as any)?.window?.Pi?.init({ version: "2.0" });
  }, [])

  return (
    <>
      <Head>
        <script async src="https://sdk.minepi.com/pi-sdk.js"></script>
      </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
      <Script strategy="beforeInteractive" src="https://sdk.minepi.com/pi-sdk.js"></Script>
    </>
  );
}
// <Provider store={store}>
// </Provider>
export default MyApp;
