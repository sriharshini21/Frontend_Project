import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTrainById } from '../services/apiService'; 

const TrainDetailsComponent = () => {
  const { id } = useParams();
  const [train, setTrain] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await getTrainById(id);
        setTrain(response);
      } catch (error) {
        setError('Error fetching train details');
      }
    };

    fetchTrain();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!train) {
    return <p>Loading train details...</p>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>From: {train.departureLocation}</p>
      <p>To: {train.arrivalLocation}</p>
      <p>Price: ${train.pricePerTicket}</p>
      <p>Departure Date: {train.departureDate}</p>
      <p>Arrival Date: {train.arrivalDate}</p>
      <button onClick={() => navigate(`/trains/booking/${train.id}`)}>Proceed to Booking</button>
    </div>
  );
};

export default TrainDetailsComponent;
