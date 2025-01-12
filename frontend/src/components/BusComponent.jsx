import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBuses } from '../services/apiService'; // Assuming you have a function to fetch buses

const BusComponent = () => {
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        console.log('Fetching all buses...');
        const response = await getAllBuses(); // Fetch all buses from the API
        console.log('All Buses Response:', response); // Log the response for debugging
        setBuses(response); // Update the buses state with the response data
      } catch (error) {
        setError('Error fetching buses');
        console.error('Error fetching buses:', error);
      }
    };

    fetchBuses();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (buses.length === 0) {
    return <p>No buses available.</p>;
  }

  return (
    <div>
      <h2>All Buses</h2>
      <div>
        {buses.map((bus) => (
          <div key={bus.id} className="bus-item">
            <h3>{bus.name}</h3>
            <p>From: {bus.departureLocation}</p>
            <p>To: {bus.arrivalLocation}</p>
            <p>Price: ${bus.pricePerTicket}</p>
            {/* View Details Button */}
            <button onClick={() => navigate(`/buses/${bus.id}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusComponent;
