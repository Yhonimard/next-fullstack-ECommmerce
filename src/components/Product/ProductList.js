import {
  Card,
  CardBody,
  Container,
  Text,
  Heading,
  Img,
  SimpleGrid,
  CardFooter,
  HStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductList = ({ data }) => {
  const img = "https://source.unsplash.com/500x500";
  const router = useRouter();

  const handleNavigate = (id) => {
    router.replace(`/product-list/${id}`);
  };

  const { result: datas } = data;

  return (
    <Container maxW="container.xl" mt={2}>
      <SimpleGrid columns={[2, 3, null, 4]} spacing={5}>
        {datas.map((i) => (
          <Card
            overflow="hidden"
            borderRadius="md"
            boxShadow="lg"
            key={i.id}
            transition="all 300ms"
            cursor="pointer"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Img src={`https://source.unsplash.com/1000x1000?${i.name}`} />
            <CardBody>
              <Heading size="sm" noOfLines={1}>
                {i.name}
              </Heading>
              <Text noOfLines={1} lineHeight={1.7}>
                {i.description}
              </Text>

              <HStack>
                <Text>$50</Text>
                <Button variant="ghost" size="sm">
                  add
                </Button>
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default ProductList;
