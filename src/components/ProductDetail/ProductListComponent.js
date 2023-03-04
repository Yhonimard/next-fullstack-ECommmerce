import {
  BottomBox,
  Box,
  Container,
  ContentBox,
  DescText,
  Img,
  Price,
  Title,
} from "./styled";

const ProductListComponent = () => {
  const img = "https://source.unsplash.com/500x500";

  return (
    <Container>
      <Box>
        <Img src={`${img}`} />

        <ContentBox>
          <Title>
            testing title Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Error exercitationem alias praesentium placeat ipsum debitis
            harum! Repudiandae enim obcaecati modi deserunt. Quibusdam
            architecto alias quod dolores dolorum magnam, fugiat aperiam.
          </Title>
          <DescText>
            testing description Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet placeat nisi sequi provident mollitia
            quibusdam ipsum delectus, esse repellat, laborum vitae, veritatis
            non officiis cum consectetur? Non maxime explicabo, voluptatem
            commodi optio eos nihil numquam ullam ducimus quae? Sapiente
            praesentium quia quod accusantium nihil non cumque rem, vitae culpa
            beatae.
          </DescText>
          <BottomBox>
            <Price>$50</Price>
          </BottomBox>
        </ContentBox>
      </Box>
    </Container>
  );
};
export default ProductListComponent;
