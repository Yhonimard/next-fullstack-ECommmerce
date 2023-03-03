import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0.5em 1.5em;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  box-shadow: 0 0.1px 5px rgba(0, 0, 0, 0.5);
  position: sticky;
`;

export const TextLogo = styled.h1`
  font-size: 20px;
  font-weight: 600;
  /* font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; */
  letter-spacing: -0.3px;
`;

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
    transform: scale(1.01);
    box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 5px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: 300ms all;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.5);
  }
`;

export const Menu = styled.div`
  position: absolute;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  height: ${(props) => (props.isOpen ? "fit-content" : "0")};
  transition: 200ms;
  right: 30px;
  top: 70px;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 10px;
  width: 150px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

export const MenuList = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  row-gap: 5px;
  flex-wrap: wrap;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  cursor: pointer;
  transition: 200ms all;
  column-gap: 10px;

  &:hover {
    transform: scale(1.02);
  }
`;

export const MenuText = styled.h6`
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: capitalize;
  width: 70%;
`;

export const LoginButton = styled.button`
  padding: 7px 15px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  background-color: inherit;
  transition: 200ms;
  &:hover {
    transform: scale(1.03);
  }
`;
