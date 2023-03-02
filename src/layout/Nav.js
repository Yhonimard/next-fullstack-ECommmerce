// import {
//   Container,
//   TextLogo,
//   Box,
//   Avatar,
//   RightBox,
//   // Menu,
//   MenuList,
//   MenuItem,
//   MenuText,
//   LoginButton,
// } from "./styled";
import FloatingCart from "../components/FloatingCart/FloatingCart";
import { useCallback, useEffect, useState } from "react";
import SettingIcon from "@//assets/icons/SettingIcons";
import LogoutIcon from "@//assets/icons/LogoutIcon";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  AppBar,
  Avatar,
  CssBaseline,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const { isLogin } = useSelector((state) => state.global);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  // const handleNavigate = () => {
  //   router.push("/auth/login");
  // };

  return (
    <AppBar color="default">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Yhonimard</Typography>
        <IconButton onClick={handleOpenMenu}>
          <Avatar size="sm" sx={{ width: 32, height: 32 }} />
        </IconButton>
        <Menu
          open={openMenu}
          onClose={handleOpenMenu}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem>testing</MenuItem>
          <MenuItem>testing</MenuItem>
          <MenuItem>testing</MenuItem>
          <MenuItem>testing</MenuItem>
          <MenuItem>testing</MenuItem>
          <MenuItem>testing</MenuItem>
        </Menu>
      </Toolbar>
      <div></div>
    </AppBar>

    // <Container>
    //   <Box>
    //     <TextLogo>Yhonimard</TextLogo>
    //   </Box>
    //   <RightBox>
    //     {!isLogin && <LoginButton onClick={handleNavigate}>login</LoginButton>}
    //     {isLogin && (
    //       <>
    //         <FloatingCart />
    //         <Avatar
    //           src={"https://source.unsplash.com/300x300"}
    //           onClick={handleOpenMenu}
    //         />
    //         <Menu isOpen={openMenu}>
    //           <MenuList>
    //             <MenuItem>
    //               <SettingIcon />
    //               <MenuText>Settings</MenuText>
    //             </MenuItem>
    //             <MenuItem>
    //               <LogoutIcon />
    //               <MenuText>Logout</MenuText>
    //             </MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </>
    //     )}
    //   </RightBox>
    // </Container>
  );
};

export default Nav;
