import styled from "styled-components";

export const Box = styled.div`
  border-radius: 5px;
  padding: 1px 8px;
  cursor: pointer;
  justify-content: center;
  display: flex;
  align-items: center;
  height: 34.5px;
  width: fit-content;
  column-gap: 1em;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 5px;
  }
`;

export const Text = styled.h5`
  font-size: small;
`;

export const Container = styled.div`
  position: absolute;
  visibility: ${(props) => (props?.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props?.isOpen ? "1" : "0")};
  height: ${(props) => (props?.isOpen ? "300px" : "0")};
  top: 70px;
  right: 10px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 5px;
  width: 300px;
  transition: 200ms;
  padding: 5px 10px;
  background-color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid;
`;

export const HeaderTitle = styled.p`
  font-size: 14px;
`;

export const HeaderButton = styled.button`
  border: 0;
  background: none;
  cursor: pointer;
  font-weight: 500;
  height: 45px;
  transition: 200ms;

  &:hover {
    filter: brightness(200%);
  }
`;

export const Body = styled.div`
  overflow: auto;
  max-height: 80%;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-top: 7px;
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid;
  box-sizing: border-box;
  padding: 5px 10px 11px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 10%;
  object-fit: cover;
  height: 30px;
`;

export const ProductInnerWrap = styled.div`
  width: 50%;
`;

export const ProductTitle = styled.p`
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
`;

export const ProductQuantity = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const ProductPrice = styled.h5`
  font-size: 18px;
  font-weight: bold;
  color: red;
  margin: 0;
`;
