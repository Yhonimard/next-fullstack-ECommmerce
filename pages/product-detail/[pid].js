import ProductDetailComponent from "@//components/ProductDetail/ProductDetailComponent";

const ProductId = () => {
  return <ProductDetailComponent />;
};

export default ProductId;

export const getStaticPaths = async (ctx) => {
  console.log("getStaticPaths", ctx);
  return {
    paths: {},
    fallback: true,
  };
};

export const getStaticProps = (ctx) => {
  console.log("getStaticProps", ctx);
};
