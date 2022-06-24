import { useState, useEffect } from "react";
import axios from "axios";
import "./globals.css";
import {
  AppWrapper,
  PreviewsWrapper,
  FetchErrorMessage,
} from "./components/Components.styled";
import PageTitle from "./components/PageTitle";
import TripPreview from "./components/TripPreview";
import LoadingSkeleton from "./components/LoadingSkeleton";

interface IFetchedItem {
  id: number;
  tripDuration: string;
  name: string;
  rating: number;
  price: number;
  previousPrice: number;
  photo: string;
}

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fetchingError, setFetchingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3004/trips");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setFetchingError(true);
          setErrorMessage(error.message);
          setLoading(false);
        } else {
          setFetchingError(true);
          setErrorMessage("Something went wrong. Contact us immediately");
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AppWrapper>
        <PageTitle text="Recently viewed trips" />
        <PreviewsWrapper>
          {fetchingError && (
            <div>
              <LoadingSkeleton />
              <FetchErrorMessage>{errorMessage}</FetchErrorMessage>
            </div>
          )}
          {loading ? (
            <LoadingSkeleton />
          ) : (
            data.map((item: IFetchedItem) => (
              <TripPreview
                key={item.id}
                tripDuration={item.tripDuration}
                name={item.name}
                rating={item.rating}
                price={item.price}
                previousPrice={item.previousPrice}
                photo={item.photo}
              />
            ))
          )}
        </PreviewsWrapper>
      </AppWrapper>
    </>
  );
}
