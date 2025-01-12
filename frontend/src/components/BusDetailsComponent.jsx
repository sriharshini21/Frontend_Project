import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBusById } from '../services/apiService'; // Assuming you have a function to fetch bus details

const BusDetailsComponent = () => {
  const { id } = useParams();
  const [bus, setBus] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBus = async () => {
      try {
        const response = await getBusById(id);
        setBus(response);
      } catch (error) {
        setError('Error fetching bus details');
      }
    };

    fetchBus();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!bus) {
    return <p>Loading bus details...</p>;
  }

  return (
    <div>
      <h2>Bus Details</h2>
      <h3>{bus.name}</h3>
      <p>From: {bus.departureLocation}</p>
      <p>To: {bus.arrivalLocation}</p>
      <p>Price: ${bus.pricePerTicket}</p>
      <p>Departure Date: {bus.departureDate}</p>
      <p>Arrival Date: {bus.arrivalDate}</p>
      <button onClick={() => navigate(`/buses/booking/${bus.id}`)}>Proceed to Booking</button>
    </div>
  );
};

export default BusDetailsComponent;
