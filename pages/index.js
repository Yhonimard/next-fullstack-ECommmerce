import ProductHeader from "@//components/Product/ProductHeader";
import ProductList from "@//components/Product/ProductList";
import { isAuth } from "@//redux/GlobalState";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import DataUserThunk from "@//redux/data-user-thunk";

export default function Home({ data }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("token");
    const userId = getCookie("userid");
    if (token && userId) {
      dispatch(isAuth(true));
      dispatch(DataUserThunk(userId));
      return;
    }
    dispatch(isAuth(false));
  }, [dispatch]);

  return (
    <>
      <ProductHeader />
      <ProductList data={data} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.HOST_URL}/api/products/get`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
