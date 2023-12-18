import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const { data, error } = useSWR("https://example-apis.vercel.app/api/art", fetcher); // fetcher direkt mit useSWR angeben, da <SWRConfig> erst danach definiert wird
  const pieces = data;

  pageProps = { ...pageProps, pieces, error }; // Page props um pieces und error erweitern, damit es für alle Komponenten verfügbar ist.

  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
      }}
    >
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}