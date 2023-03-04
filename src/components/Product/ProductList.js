import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  Col,
  Container,
  Grid,
} from "./styled";

const ProductList = ({ data }) => {
  const img = "https://source.unsplash.com/500x500";
  const router = useRouter();

  const handleNavigate = (id) => {
    router.replace(`/product-list/${id}`);
  };

  const { result: datas } = data;

  return (
    <Container>
      <Grid>
        {datas.map((i) => (
          <Col key={i.id} onClick={() => handleNavigate(i.id)}>
            <Card onClick={handleNavigate}>
              <CardImg src={`${img}?${i.name}`} />
              <CardContent>
                <CardTitle>{i.name}</CardTitle>
                <CardText>{i.description}</CardText>
                <CardPrice>${i.price}</CardPrice>
              </CardContent>
            </Card>
          </Col>
        ))}
      </Grid>
    </Container>
  );
};
export default ProductList;
