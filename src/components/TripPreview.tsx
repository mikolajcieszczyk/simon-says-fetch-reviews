import StarRatingComponent from "react-star-rating-component";
import {
  TripPreviewWrapper,
  TripDuration,
  TripName,
  RatingWrapper,
  PriceWrapper,
} from "./Components.styled";

export interface IFetchedItem {
  id?: number;
  tripDuration: string;
  name: string;
  rating: number;
  price: number;
  previousPrice: number;
  photo: string;
}

export const TripPreview = ({
  tripDuration,
  name,
  rating,
  price,
  previousPrice,
  photo,
}: IFetchedItem) => {
  return (
    <TripPreviewWrapper>
      <img src={photo} alt="" />
      <TripDuration>{tripDuration}</TripDuration>
      <TripName>{name}</TripName>
      <RatingWrapper>
        <StarRatingComponent
          name="ratingStar"
          starCount={5}
          value={rating}
          editing={false}
        />
        <span>{rating}</span>
      </RatingWrapper>
      <PriceWrapper>
        <span>From &euro;{price}</span>-<span>Price &euro;{previousPrice}</span>
      </PriceWrapper>
    </TripPreviewWrapper>
  );
};
