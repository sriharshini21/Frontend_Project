import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TrainBookingComponent = () => {
  const { id } = useParams(); // Get train ID from the URL
  const [bookingDetails, setBookingDetails] = useState({
    departureDate: '',
    returnDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    // Handle booking logic here
    console.log('Booking train with ID:', id, bookingDetails);
    alert(`Your train with ID: ${id} has been successfully booked!`);
  };

  return (
    <div>
      <h2>Book Train</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Departure Date</label>
          <input
            type="date"
            name="departureDate"
            value={bookingDetails.departureDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={bookingDetails.returnDate}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleBooking}>Book Now</button>
      </form>
    </div>
  );
};

export default TrainBookingComponent;
