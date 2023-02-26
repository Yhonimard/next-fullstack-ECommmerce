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
  min-width: 273px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
`;

export const Form = styled.form`
  background-color: tomato;
  box-sizing: border-box;
`;

export const FormBox = styled.label`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* padding: 10px; */
`;

export const Label = styled.span``;

export const Input = styled.input``;
