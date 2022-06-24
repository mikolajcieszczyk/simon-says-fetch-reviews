import cat from "./img/cat.jpeg";
import StarRatingComponent from "react-star-rating-component";
import {
  TripPreviewWrapper,
  RatingWrapper,
  PriceWrapper,
} from "./components/Components.styled";

const TripPreview = () => {
  const rating = 3;
  return (
    <TripPreviewWrapper>
      <img src={cat} />
      <p>11 Countries, 25 days</p>
      <h3>European Quest</h3>
      <RatingWrapper>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          // onStarClick={this.onStarClick.bind(this)}
          editing={false}
        />
        <span>4.4</span>
      </RatingWrapper>
      <PriceWrapper>
        <span>From 2137 PLN</span>-<span>Price 1234</span>
      </PriceWrapper>
    </TripPreviewWrapper>
  );
};

export default TripPreview;
