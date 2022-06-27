import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const PreviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FetchErrorMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: red;
`;
