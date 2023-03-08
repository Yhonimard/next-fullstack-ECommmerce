import ProductDetailComponent from "@//components/ProductDetail/ProductDetailComponent";
import axios from "axios";

const ProductDetails = ({ data }) => {
  console.log(data);
  return <ProductDetailComponent />;
};

export default ProductDetails;

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/products/get`);

  const paths = data.result.map((i) => {
    return {
      params: {
        pid: `${i.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/get/${params.pid}`
  );

  return {
    props: {
      data,
    },
  };
};
