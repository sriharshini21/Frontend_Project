import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the flight ID from the URL

const FlightBookingComponent = () => {
  const { id } = useParams(); // Get flight ID from the URL
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
    console.log('Booking flight with ID:', id, bookingDetails);
    alert(`Your flight with ID: ${id} has been successfully booked!`);
  };

  return (
    <div>
      <h2>Booking Flight</h2>
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

export default FlightBookingComponent;
