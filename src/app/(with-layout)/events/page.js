import React from "react";
import { EventCard } from "./EventCard";

const EventPage = async ({ active }) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();

  return (
    <>
      <EventCard product={product} active={active} />
    </>
  );
};

export default EventPage;
