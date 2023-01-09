import { AppProps } from "next/app";
import { Shield } from "../components/Shield";
import { DarkProvider } from "../context/darkMode";
import { AuthLoginProvider } from "../context/login";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthLoginProvider>
                <Shield>
                    <DarkProvider>
                        <Global />
                        <Component {...pageProps} />
                    </DarkProvider>
                </Shield>
            </AuthLoginProvider>
        </>
    );
}

export default MyApp;
