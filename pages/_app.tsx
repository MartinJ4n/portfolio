import "../node_modules/modern-normalize/modern-normalize.css";
import "../styles/globals.sass";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
