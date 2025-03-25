import React from "react";
import "./DestinationCard.css"; // Import the CSS file

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <div className="card-content">
        <h1 className="card-title">{destination.name}</h1>
        <p className="card-location">{destination.location}</p>
        <p className="card-description">{destination.description}</p>
        <p className="card-price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
