import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { getAllFlights } from '../services/apiService';

const FlightsComponent = () => {
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        console.log('Fetching all flights...');
        const response = await getAllFlights(); // Fetch all flights from the API
        console.log('All Flights Response:', response); // Log the response for debugging
        setFlights(response); // Update the flights state with the response data
      } catch (error) {
        setError('Error fetching flights');
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (flights.length === 0) {
    return <p>No flights available.</p>;
  }

  return (
    <div>
      <h2>All Flights</h2>
      <div>
        {flights.map(flight => (
          <div key={flight.id} className="flight-item">
            <h3>{flight.name}</h3>
            <p>From: {flight.departureLocation}</p>
            <p>To: {flight.arrivalLocation}</p>
            <p>Price: ${flight.pricePerTicket}</p>
            {/* View Details Button */}
<button onClick={() => window.location.href = `/flights/${flight.id}`}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightsComponent;
