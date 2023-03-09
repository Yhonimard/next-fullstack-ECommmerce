import { Box, Card, CardBody, Container, Img } from "@chakra-ui/react";

const ProductDetailComponent = ({ data }) => {
  // const img = "https://source.unsplash.com/500x500";
  console.log(data);
  return (
    <Container
      minH="100vh"
      overflow="hidden"
      shadow="lg"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card m="auto">
        <Img src={`http://source.unsplash.com/500x500`} />
        <CardBody>testing</CardBody>
      </Card>
    </Container>
  );
};

export default ProductDetailComponent;
