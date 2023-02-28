import Layout from "@//layout/Layout";
import "@//style/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  console.log(router);

  const isAuth = router.pathname.startsWith("/auth");

  return (
    <>
      {isAuth && <Component />}
      {!isAuth && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
