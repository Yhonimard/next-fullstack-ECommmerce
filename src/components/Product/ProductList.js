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
  // const img2 = 'https://source.unsplash.com/1000x1000?programming';

  const handleNavigate = () => {};
  console.log(data);
  const { result: datas } = data;

  return (
    <Container>
      <Grid>
        {datas.map((i) => (
          <Col>
            <Card onClick={handleNavigate}>
              <CardImg src={`${img}?${i.name}`} />
              <CardContent>
                <CardTitle>{i.name}</CardTitle>
                <CardText>description description description</CardText>
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
