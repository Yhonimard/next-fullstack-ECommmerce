import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  min-width: 300px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  row-gap: 10px;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: 300ms;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  padding-left: 2px;
  transition: 300ms;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 300ms;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  margin-top: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FormText = styled.p`
  padding-top: ${(props) => props.paddingtop};
  font-size: 12px;
`;
