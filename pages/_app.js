/*import GlobalStyle from "../styles";                                      vorher
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 5000,
      }}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
} */


import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Layout from '../components/Layout';

const fetcher = (url) => fetch(url).then((res) => res.json());

const MyApp = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
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

export default MyApp;