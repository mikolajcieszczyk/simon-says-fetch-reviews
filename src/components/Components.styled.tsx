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

export const TripDuration = styled.p`
  margin-bottom: 0;
  font-size: 12px;
  color: grey;
`;

export const TripName = styled.h3`
  margin-top: 0;
`;

export const PriceWrapper = styled.h4`
  margin-top: 10px;
  span {
    margin: 0 4px;
  }

  span:last-child {
    color: grey;
    text-decoration: line-through;
  }
`;

export const FetchErrorMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: red;
`;
