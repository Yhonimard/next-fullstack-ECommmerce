import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isAuth } from "../redux/AuthState";
import { CartIcon } from "../assets/Icon";
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
} from "@chakra-ui/react";
import { deleteCookie } from "cookies-next";

const Nav = () => {
  const { isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    deleteCookie("token");
    deleteCookie("userid");
    dispatch(isAuth(false));
  };

  return (
    <Flex h="60px" align="center" px={4} boxShadow="lg">
      <Heading size="sm">YHONIMARD</Heading>
      <Spacer />
      {!isLogin && (
        <Button
          as={Link}
          href="/auth/login"
          variant="ghost"
          colorScheme="blackAlpha"
          color="black"
        >
          LOGIN
        </Button>
      )}
      {isLogin && (
        <HStack>
          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              isRound={true}
              icon={<CartIcon size={25} />}
            />
            <MenuList overflowY="scroll" h="300px" boxShadow="lg">
              <HStack
                justifyContent="space-between"
                align="center"
                px={3}
                py={2}
              >
                <Text>My Cart (10)</Text>
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
                <Flex w="50%" direction="column">
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
              <MenuItem onClick={logoutHandler}>logout</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      )}
    </Flex>
  );
};

export default Nav;
