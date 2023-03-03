import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Container,
  LoginButton,
  Menu,
  MenuItem,
  MenuList,
  MenuText,
  RightBox,
  TextLogo,
} from "./styled";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { isAuth } from "../redux/GlobalState";
import FloatingCart from "../components/FloatingCart/FloatingCart";

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
    <Container>
      <Box>
        <TextLogo>Yhonimard</TextLogo>
      </Box>
      {!isLogin && <LoginButton onClick={handleNavigate}>Login</LoginButton>}
      {isLogin && (
        <RightBox>
          <FloatingCart />
          <Avatar
            src="https://source.unsplash.com/300x300"
            onClick={openMenuHandler}
          />
          <Menu isOpen={isOpen}>
            <MenuList>
              <MenuItem>
                <MenuText>Settings</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText onClick={logoutHandler}>Logout</MenuText>
              </MenuItem>
            </MenuList>
          </Menu>
        </RightBox>
      )}
    </Container>
  );
};

export default Nav;
