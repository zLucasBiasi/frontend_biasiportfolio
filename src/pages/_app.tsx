import { AppProps } from "next/app";

import Global from "../styles/global";
import theme from "../styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
