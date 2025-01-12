import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTrains } from '../services/apiService';

const TrainComponent = () => {
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        console.log('Fetching all trains...');
        const response = await getAllTrains(); // Fetch all trains from the API
        console.log('All Trains Response:', response); // Log the response for debugging
        setTrains(response); // Update the trains state with the response data
      } catch (error) {
        setError('Error fetching trains');
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (trains.length === 0) {
    return <p>No trains available.</p>;
  }

  return (
    <div>
      <h2>All Trains</h2>
      <div>
        {trains.map(train => (
          <div key={train.id} className="train-item">
            <h3>{train.name}</h3>
            <p>From: {train.departureLocation}</p>
            <p>To: {train.arrivalLocation}</p>
            <p>Price: ${train.pricePerTicket}</p>
            {/* View Details Button */}
            <button onClick={() => navigate(`/trains/${train.id}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainComponent;
