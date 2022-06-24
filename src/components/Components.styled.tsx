import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const PreviewsWrapper = styled.div`
  display: flex;
`;

export const PageTitleWrapper = styled.h3``;

export const TripPreviewWrapper = styled.div`
  margin: 0 10px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  span {
    margin-left: 5px;
  }
`;

export const PriceWrapper = styled.h4`
  span:first-child {
    color: red;
  }

  span:last-child {
    color: grey;
    text-decoration: line-through;
  }
`;
