import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api"; // Replace with your backend base URL

// Bookings API
export const createBooking = (propertyId, startDate, endDate) => {
  return axios.post(`http://localhost:8080/api/bookings`, null, {
    params: { propertyId, startDate, endDate },
  });
};

export const getAllBookings = () => {
  return axios.get(`${API_BASE_URL}/bookings`);
};

// Properties API
export const createProperty = (property, userId) => {
  return axios.post(`${API_BASE_URL}/properties`, property, {
    params: { UserId: userId },
  });
};

export const getAllProperties = () => {
  return axios.get(`http://localhost:8080/api/properties`);
};

// Users API
export const getAllUsers = () => {
  return axios.get(`${API_BASE_URL}/users`);
};

export const deleteUser = (id) => {
  return axios.delete(`${API_BASE_URL}/users/${id}`);
};

export const getBookingById = (id) => {
    return axios.get(`http://localhost:8080/api/bookings/${id}`);
};

export const getPropertyById = async (id) => {
  return await axios.get(`http://localhost:8080/api/properties/${id}`);
};

// export const getPropertyById = async (propertyId) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/properties/${propertyId}`);
//     return response.data; // Return specific property data
//   } catch (error) {
//     console.error('Error fetching property:', error);
//     throw error;
//   }
//}

// // Fetch Property by ID
// export const getPropertyById = async (id) => {
//   const response = await fetch(/api/properties/${id});
//   return await response.json();
// };