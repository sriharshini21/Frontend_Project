import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPropertyById } from '../services/apiService';

const PropertyDetailsComponent = () => {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState(null);
  const [error, setError] = useState(null); // To capture errors

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getPropertyById(id); // Fetch property by ID
        setProperty(response.data); // Access the 'data' object from the response
      } catch (error) {
        setError('Error fetching property details. Please try again later.');
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  // Handle error, loading, and display property details
  if (error) {
    return <p>{error}</p>; // Show error message if there's an issue
  }

  if (!property) {
    return <p>Loading property details...</p>; // Show loading message until the property is loaded
  }

  return (
    <div className="property-details"> {/* Added a class for potential styling */}
      <h2>{property.name}</h2>
      <img src={property.imageUrl} alt={property.name} />
      <p>Location: {property.location}</p>
      <p>
        Price per Night: $ 
        {property.pricePerNight !== undefined && property.pricePerNight !== null
          ? property.pricePerNight.toFixed(2)
          : 'N/A'}
      </p>
      <p>Description: {property.description}</p>
      <Link to={`/bookings/${property.id}`}>Proceed to Booking</Link> {/* Redirect to booking page */}
    </div>
  );
};

export default PropertyDetailsComponent;
