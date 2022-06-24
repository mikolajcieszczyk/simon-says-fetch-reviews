import StarRatingComponent from "react-star-rating-component";
import {
  TripPreviewWrapper,
  TripDuration,
  TripName,
  RatingWrapper,
  PriceWrapper,
} from "./Components.styled";

interface IProps {
  id?: number;
  tripDuration: string;
  name: string;
  rating: number;
  price: number;
  previousPrice: number;
  photo: string;
}

const TripPreview = ({
  id,
  tripDuration,
  name,
  rating,
  price,
  previousPrice,
  photo,
}: IProps) => {
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

export default TripPreview;
