import React from "react";
import destinations from "./Destination";
import DestinationCard from "./DestinationCard";

const DestinationContainer = () => {
  return (
    <div>
      {destinations.map((destination) => (
        <div key={destination.id}>
          <DestinationCard destination={destination} />
        </div>
      ))}
    </div>
  );
};

export default DestinationContainer;
