import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import { store } from "../redux/store";
import React, { useEffect } from "react";
// import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "../lib/theme";

if ((globalThis)?.window) {
  var Pi = require("@pinetwork-js/sdk");
  Pi?.Pi?.init({ version: "2.0", sandbox: true });
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
// <Provider store={store}>
// </Provider>
export default MyApp;
