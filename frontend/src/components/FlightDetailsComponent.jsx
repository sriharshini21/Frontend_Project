import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useParams to fetch flight ID
import { getFlightById } from '../services/apiService'; // Assuming you have this API service

const FlightDetailsComponent = () => {
  const { id } = useParams(); // Get flight ID from the URL
  const [flight, setFlight] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const response = await getFlightById(id); // Fetch flight details using the ID
        setFlight(response);
      } catch (error) {
        setError('Error fetching flight details');
        console.error('Error fetching flight details:', error);
      }
    };

    fetchFlight();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!flight) {
    return <p>Loading flight details...</p>;
  }

  return (
    <div>
      <h2>Flight Details</h2>
      <h3>{flight.name}</h3>
      <p>From: {flight.departureLocation}</p>
      <p>To: {flight.arrivalLocation}</p>
      <p>Price: ${flight.pricePerTicket}</p>
      <p>Departure Date: {flight.departureDate}</p>
      <p>Arrival Date: {flight.arrivalDate}</p>
      {/* Proceed to Booking Button */}
      <button onClick={() => navigate(`/book/${flight.id}`)}>Proceed to Booking</button>
    </div>
  );
};

export default FlightDetailsComponent;
