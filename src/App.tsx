import React from "react";
import "./globals.css";
import TripPreview from "./TripPreview";
import { AppWrapper, PreviewsWrapper } from "./components/Components.styled";
import PageTitle from "./components/PageTitle";

export default function App() {
  return (
    <AppWrapper>
      <PageTitle text="Recently viewed trips" />
      <PreviewsWrapper>
        <TripPreview />
        <TripPreview />
        <TripPreview />
      </PreviewsWrapper>
    </AppWrapper>
  );
}
