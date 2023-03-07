import Layout from "@//layout/Layout";
import store from "@//redux/store";
import "@//style/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import "@fontsource/roboto";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
});

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
