import { AppProps } from "next/app";
import { useContext } from "react";
import { DarkProvider } from "../context/darkMode";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkProvider>
        <Component {...pageProps} />
      </DarkProvider>
    </>
  );
}

export default MyApp;
