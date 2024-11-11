import DefaulTemplate from "@/components/commons/DefaultTemplate";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaulTemplate profile={pageProps.profile}>
      <Component {...pageProps} />
    </DefaulTemplate>
  );
}
