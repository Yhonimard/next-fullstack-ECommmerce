import Layout from "@//layout/Layout";
import store from "@//redux/store";
import "@//style/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAuth = router.pathname.startsWith("/auth");

  return (
    <ChakraProvider>
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
