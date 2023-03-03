import {
  Body,
  Box,
  Container,
  Header,
  HeaderButton,
  HeaderTitle,
  ProductImg,
  ProductInnerWrap,
  ProductItem,
  ProductList,
  ProductPrice,
  ProductQuantity,
  ProductTitle,
  Text,
} from "./style";
import { CartIcon } from "../../assets/icons/icons";
import { useCallback, useEffect, useState } from "react";
import Img from "../../assets/1.png";
import { useRouter } from "next/router";

const FloatingCart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleOpenCart = useCallback(() => {
    setIsOpenCart((prev) => !prev);
  }, []);

  const handleNavigate = () => {
    useRouter().replace('/cart')
    
  };

  return (
    <>
      <Box onClick={handleOpenCart}>
        <CartIcon />
        <Text>My Cart(1)</Text>
      </Box>
      <Container isOpen={isOpenCart}>
        <Header>
          <HeaderTitle>my Cart</HeaderTitle>
          <HeaderButton onClick={handleNavigate}>
            Lihat Semua Keranjang
          </HeaderButton>
        </Header>
        <Body>
          <ProductList>
            <ProductItem>
              <ProductImg src={Img} />
              <ProductInnerWrap>
                <ProductTitle>testing</ProductTitle>
                <ProductQuantity>Quantity (1)</ProductQuantity>
              </ProductInnerWrap>
              <ProductPrice>12$</ProductPrice>
            </ProductItem>
          </ProductList>
        </Body>
      </Container>
    </>
  );
};

export default FloatingCart;
