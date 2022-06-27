import { useState, useEffect } from "react";
import axios from "axios";
import { TripPreview, IFetchedItem } from "./components/TripPreview";
import PageTitle from "./components/PageTitle";
import LoadingSkeleton from "./components/LoadingSkeleton";

import { AppWrapper, PreviewsWrapper, FetchErrorMessage } from "./App.styled";
import "./globals.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [fetchingError, setFetchingError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_LOCAL_API_URL}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setFetchingError(true);
          setErrorMessage(error.message);
          setLoading(false);
        } else {
          setFetchingError(true);
          setErrorMessage("Something went wrong. Contact us immediately!");
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
