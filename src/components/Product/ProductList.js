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

const ProductList = (params) => {
  const img = "https://source.unsplash.com/500x500";
  // const img2 = 'https://source.unsplash.com/1000x1000?programming';

  const handleNavigate = () => {};

  return (
    <Container>
      <Grid>
        <Col>
          <Card onClick={handleNavigate}>
            <CardImg src={img} />
            <CardContent>
              <CardTitle>testing</CardTitle>
              <CardText>testing testing testing</CardText>
              <CardPrice>$14</CardPrice>
            </CardContent>
          </Card>
        </Col>
      </Grid>
    </Container>
  );
};
export default ProductList;
