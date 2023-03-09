import { CartPlusIcon } from "@//assets/Icon";
import {
  Card,
  CardBody,
  Container,
  Text,
  Heading,
  Img,
  SimpleGrid,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const ProductList = ({ data }) => {
  const router = useRouter();

  const handleNavigate = (id) => {
    router.push(`/product-detail/${id}`);
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
            onClick={() => handleNavigate(i.id)}
          >
            <Img
              src={`https://source.unsplash.com/1000x1000?${i.name}`}
              objectFit="cover"
            />
            <CardBody>
              <Heading size="sm" noOfLines={1}>
                {i.name}
              </Heading>
              <Text noOfLines={1} lineHeight={1.7}>
                {i.description}
              </Text>
              <HStack justify="space-between">
                <Text fontWeight="medium">$50</Text>
                <IconButton
                  icon={<CartPlusIcon size={18} />}
                  isRound
                  size="sm"
                  variant="ghost"
                />
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};
export default ProductList;
