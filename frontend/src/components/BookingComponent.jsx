import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPropertyById, createBooking } from '../services/apiService'; // Ensure correct import

const BookingComponent = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState(null);

  // Fetch property details by ID
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getPropertyById(id);
        setProperty(response.data);
      } catch (error) {
        console.error('Error fetching property:', error);
        setError('Error fetching property details');
      }
    };

    fetchProperty();
  }, [id]);

  const handleBooking = async () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates.');
      return;
    }

    try {
      const response = await createBooking(id, startDate, endDate); // Send request to backend to create booking
      alert(`Booking for ${property.name} from ${startDate} to ${endDate} has been confirmed!`);
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Failed to confirm booking. Please try again.');
    }
  };

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!property) {
    return <p>Loading property details...</p>;
  }

  return (
    <div>
      <h2>Book {property.name}</h2>
      <p>Price per Night: ${property.pricePerNight.toFixed(2)}</p>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingComponent;
