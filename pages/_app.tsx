import MainProvider from "@/providers/MainProvider/MainProvider";
import { AppProps } from "next/app";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
