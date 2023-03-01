import {
  Container,
  TextLogo,
  Box,
  Avatar,
  RightBox,
  Menu,
  MenuList,
  MenuItem,
  MenuText,
  LoginButton,
} from "./styled";
import FloatingCart from "../components/FloatingCart/FloatingCart";
import { useCallback, useEffect, useState } from "react";
import SettingIcon from "@//assets/icons/SettingIcons";
import LogoutIcon from "@//assets/icons/LogoutIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState();
  const router = useRouter();

  const { isLogin } = useSelector((state) => state.global);
  console.log(isLogin);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  const handleNavigate = () => {
    router.push("/auth/login");
  };

  return (
    <Container>
      <Box>
        <TextLogo>Yhonimard</TextLogo>
      </Box>
      <RightBox>
        {!isLogin && <LoginButton onClick={handleNavigate}>login</LoginButton>}
        {isLogin && (
          <>
            <FloatingCart />
            <Avatar
              src={"https://source.unsplash.com/300x300"}
              onClick={handleOpenMenu}
            />
            <Menu isOpen={openMenu}>
              <MenuList>
                <MenuItem>
                  <SettingIcon />
                  <MenuText>Settings</MenuText>
                </MenuItem>
                <MenuItem>
                  <LogoutIcon />
                  <MenuText>Logout</MenuText>
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </RightBox>
    </Container>
  );
};

export default Nav;
