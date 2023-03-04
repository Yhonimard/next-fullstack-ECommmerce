import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 17px;
  margin-top: 10px;

  @media (min-width: 600px) {
    padding: 0 24px;
  }
`;

export const Box = styled.div`
  height: 500px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const ContentBox = styled.div`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h6`
  font-size: 1.5em;
  font-weight: 700;
  margin-top: 5px;
  text-align: center;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DescText = styled.h6`
  font-size: 1em;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  font-weight: 500;
`;

export const BottomBox = styled.div`
  justify-self: end;
  align-self: flex-end;
  width: 100%;
`;

export const Price = styled.h6`
  font-size: 1em;
  line-height: 1.5;
`;
