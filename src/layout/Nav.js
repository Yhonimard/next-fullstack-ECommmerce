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
} from "./styled";
import FloatingCart from "../components/FloatingCart/FloatingCart";
import { useCallback, useEffect, useState } from "react";
import SettingIcon from "../assets/icons/SettingIcons";
import LogoutIcon from "../assets/icons/LogoutIcon";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState();

  const handleOpenMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  return (
    <Container>
      <Box>
        <TextLogo>Yhonimard</TextLogo>
      </Box>
      <RightBox>
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
      </RightBox>
    </Container>
  );
};

export default Nav;
