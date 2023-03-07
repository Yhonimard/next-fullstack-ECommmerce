import { Box, Flex, Heading } from "@chakra-ui/react";

const ProductHeader = () => {
  return (
    <Flex h="50vh" direction="column">
      <Heading m="auto">explore product</Heading>

      <Box justifyContent>
        <Flex></Flex>
      </Box>
    </Flex>
  );
};

export default ProductHeader;
