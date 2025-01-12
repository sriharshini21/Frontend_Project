import React, { useState, useEffect } from "react";
import { getAllProperties } from "../services/apiService";
import { Link } from "react-router-dom";
import "../App.css";

const PropertyComponent = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        console.warn("No token found. Redirecting to login...");
        window.location.href = "/login"; // Redirect to login page
        return;
      }
      const response = await getAllProperties();
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <h2>All Properties</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-item">
            <img src={property.imageUrl} alt={property.name} />
            <h4>{property.name}</h4>
            <p>{property.location}</p>
            <p>Price per Night: ${property.pricePerNight.toFixed(2)}</p>
            <Link to={`/properties/${property.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyComponent;
