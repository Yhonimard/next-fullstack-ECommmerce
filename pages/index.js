import ProductHeader from "@//components/Product/ProductHeader";
import ProductList from "@//components/Product/ProductList";
import { isAuth } from "@//redux/GlobalState";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Home({ data }) {
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(isAuth(true));
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
  const { data } = await axios.get("http://localhost:3000/api/products/get");
  return {
    props: {
      data: data,
    },
  };
};

// "name " : "T-shirt erigo",
// "category" : "T-shirt",
// "price": 19
