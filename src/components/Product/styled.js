import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 45vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h1`
  margin: auto;
  text-align: center;
`;

export const HeaderCategoryBox = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.5);

  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 15px 0;
  @media (max-width: 580px) {
    overflow-y: auto;
  }
`;

export const HeaderCategory = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 580px) {
    width: 600px;
  }
`;

export const HeaderCategoryItem = styled.div`
  margin-left: 10px;
  cursor: pointer;
  transition: all 300ms;
  text-transform: capitalize;

  &:hover {
    transform: scale(1.05);
  }
  &:nth-child(1) {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 17px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 200px;

  @media (min-width: 600px) {
    padding: 0 25px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: calc(100% + 16px);
  margin-top: -16px;
  margin-left: -16px;
`;

export const Col = styled.div`
  margin: 0;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 16px 0 0 16px;
  @media (min-width: 600px) {
    flex: 0 0 33.333%;
    max-width: 33.333%;
  }
  @media (min-width: 900px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

export const Card = styled.div`
  /* height: 300px; */
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: #fff;
  color: rgba(0, 0, 0, 0.85);

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  background-size: cover;
  display: block;
  background-repeat: no-repeat;
`;

export const CardContent = styled.div`
  padding: 12px;
`;

export const CardTitle = styled.h6`
  font-weight: 600;
  font-size: 1em;
  line-height: 1.75;
`;

export const CardText = styled.h6`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
`;

export const CardPrice = styled.h6`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
`;
