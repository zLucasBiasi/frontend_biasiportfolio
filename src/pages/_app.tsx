import { AppProps } from "next/app";
import { DarkProvider } from "../context/darkMode";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DarkProvider>
                <Global />
                <Component {...pageProps} />
            </DarkProvider>
        </>
    );
}

export default MyApp;
