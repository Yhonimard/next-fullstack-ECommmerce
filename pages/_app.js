import Layout from "@//layout/Layout";
import store from "@//redux/store";
import "@//style/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import theme from "@//utils/theme";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAuth = router.pathname.startsWith("/auth");

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        {isAuth && <Component />}
        {!isAuth && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </Provider>
    </ChakraProvider>
  );
}
