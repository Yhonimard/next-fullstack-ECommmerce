import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";

const ProductHeader = () => {
  return (
    <Flex h="50vh" direction="column">
      <Heading m="auto">explore product</Heading>

      <Box py={2} overflowX={["scroll", "auto"]} borderY="groove 1px">
        <Flex
          justify="center"
          align="center"
          w={["fit-content", "auto"]}
          columnGap="10px"
          px={3}
        >
          <Button variant="ghost" size={["sm", "md"]}>
            category
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductHeader;
