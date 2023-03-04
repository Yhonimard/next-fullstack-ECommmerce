import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { isAuth } from "../redux/GlobalState";
import {
  Avatar,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Icon from "../assets/test.svg";

const Nav = () => {
  const { isLogin } = useSelector((state) => state.global);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const openMenuHandler = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  const handleNavigate = () => {
    router.replace("/auth/login");
  };

  const logoutHandler = () => {
    Cookies.remove("token");
    dispatch(isAuth(false));
  };

  return (
    <Flex h={`14`} align="center" paddingX={"5"} boxShadow="base">
      <Text fontWeight={"bold"} fontSize="larger">
        Yhonimard
      </Text>
      <Spacer />

      <HStack align={`center`}>
        <Icon />

        <Menu>
          <MenuButton
            as={Avatar}
            aria-label="avatar button"
            cursor="pointer"
            w="9"
            h="9"
          />
          <MenuList>
            <MenuItem>testing</MenuItem>
            <MenuItem>testing</MenuItem>
            <MenuItem>testing</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
    // <Container>
    //   <Box>
    //     <TextLogo>Yhonimard</TextLogo>
    //   </Box>
    //   {!isLogin && <LoginButton onClick={handleNavigate}>Login</LoginButton>}
    //   {isLogin && (
    //     <RightBox>
    //       <FloatingCart />
    //       <Avatar
    //         src="https://source.unsplash.com/300x300"
    //         onClick={openMenuHandler}
    //       />
    //       <Menu isOpen={isOpen}>
    //         <MenuList>
    //           <MenuItem>
    //             <MenuText>Settings</MenuText>
    //           </MenuItem>
    //           <MenuItem>
    //             <MenuText onClick={logoutHandler}>Logout</MenuText>
    //           </MenuItem>
    //         </MenuList>
    //       </Menu>
    //     </RightBox>
    //   )}
    // </Container>
  );
};

export default Nav;
