import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isAuth } from "../redux/GlobalState";
import { CartIcon } from "../assets/Icon";
import Cookies from "js-cookie";
import Link from "next/link";
import {
  Avatar,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  Divider,
  Img,
  VStack,
} from "@chakra-ui/react";

const Nav = () => {
  const { isLogin } = useSelector((state) => state.global);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    router.push("/auth/login");
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(isAuth(false));
  };

  return (
    <Flex h="50px" align="center" px={4} boxShadow="lg">
      <Heading size="sm">YHONIMARD</Heading>

      <Spacer />

      <HStack>
        <Menu>
          <MenuButton
            as={IconButton}
            variant="ghost"
            isRound={true}
            icon={<CartIcon />}
          />
          <MenuList overflowY="scroll" h="300px" boxShadow="lg">
            <HStack justifyContent="space-between" align="center" px={3} py={2}>
              <Text>My Cart ()</Text>
              <Button
                as={Link}
                href="/cart"
                variant="link"
                size="sm"
                color="blue.700"
              >
                see all my cart
              </Button>
            </HStack>
            <Divider colorScheme="blackAlpha" size={30} />
            <MenuItem justifyContent="space-between">
              <Img
                src="https://source.unsplash.com/300x300"
                boxSize="30px"
                objectFit="cover"
              />
              <Flex w="50%" m={0} direction="column">
                <Text fontSize="sm" as="h6">
                  product title
                </Text>
                <Text fontSize="xs" as="h6">
                  Quantity : 10
                </Text>
              </Flex>
              <Text>$50</Text>
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={IconButton}
            variant="ghost"
            isRound={true}
            colorScheme="blackAlpha"
          >
            <Avatar w={8} h={8} />
          </MenuButton>
          <MenuList>
            <MenuItem>settings</MenuItem>
            <MenuItem>logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );
};

export default Nav;
