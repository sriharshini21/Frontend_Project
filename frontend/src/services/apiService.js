import axios from "axios";

// Base URL for API
const API_BASE_URL = "http://localhost:8080/api";

// Utility function to get the token from localStorage
const getToken = () => localStorage.getItem("jwtToken");

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Interceptor to include the token in every request
apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- User APIs ---
export const loginUser = async (email, password) => {
  return await apiClient.post("/users/login", { email, password });
};

export const getAllUsers = async () => {
  return await apiClient.get("/users");
};

export const deleteUser = async (id) => {
  return await apiClient.delete(`/users/${id}`);
};

// --- Property APIs ---
export const getAllProperties = async () => {
  return await apiClient.get("/properties");
};

export const getPropertyById = async (id) => {
  return await apiClient.get(`/properties/${id}`);
};

export const createProperty = async (property, userId) => {
  return await apiClient.post("/properties", property, {
    params: { UserId: userId },
  });
};

// --- Booking APIs ---
export const getAllBookings = async () => {
  return await apiClient.get("/bookings");
};

export const getBookingById = async (id) => {
  return await apiClient.get(`/bookings/${id}`);
};

export const createBooking = async (propertyId, startDate, endDate) => {
  return await apiClient.post(
    "/bookings",
    null,
    { params: { propertyId, startDate, endDate } }
  );
};

export const deleteBooking = async (id) => {
  return await apiClient.delete(`/bookings/${id}`);
};

// --- Error Handling ---
export const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    console.error("Response Data:", error.response.data);
    console.error("Response Status:", error.response.status);
  }
  throw error;
};
// --- Flight Booking APIs ---
export const getFlightById = async (id) => {
  try {
    const response = await apiClient.get(`/flights/${id}`);
    console.log('API Response:', response.data); // Log the API response for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching flight:', error);
    throw error;
  }
};
export const createFlightBooking = async (flightId, departureDate, returnDate) => {
  return await apiClient.post(
    "/flight",
    null,
    { params: { flightId, departureDate, returnDate } }
  );
};
export const getFlights = async () => {
  return await apiClient.get('/flights');  // Make sure this matches your backend API endpoint
};

export const getAllFlights = async () => {
  try {
    const response = await apiClient.get('/flights');
    console.log('All Flights Response:', response.data); // Log the API response for debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};


// --- Train APIs ---
export const getAllTrains = async () => {
  try {
    const response = await apiClient.get("/trains");
    console.log("All Trains Response:", response.data); // Log the API response for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching trains:", error);
    throw error;
  }
};

export const getTrainById = async (id) => {
  try {
    const response = await apiClient.get(`/trains/${id}`);
    console.log("Train Details Response:", response.data); // Log the API response for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching train:", error);
    throw error;
  }
};

export const createTrainBooking = async (trainId, departureDate, returnDate) => {
  try {
    const response = await apiClient.post(
      "/trains/bookings",
      null,
      { params: { trainId, departureDate, returnDate } }
    );
    console.log("Create Train Booking Response:", response.data); // Log the response for debugging
    return response.data;
  } catch (error) {
    console.error("Error creating train booking:", error);
    throw error;
  }
};

export const getTrainBookings = async () => {
  try {
    const response = await apiClient.get("/trains/bookings");
    console.log("Train Bookings Response:", response.data); // Log the response for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching train bookings:", error);
    throw error;
  }
};

export const deleteTrainBooking = async (id) => {
  try {
    await apiClient.delete(`/trains/bookings/${id}`);
    console.log(`Deleted train booking with ID: ${id}`); // Log success for debugging
  } catch (error) {
    console.error("Error deleting train booking:", error);
    throw error;
  }
};

// --- Bus APIs ---
export const getAllBuses = async () => {
  try {
    const response = await apiClient.get("/buses");
    console.log("All Buses Response:", response.data); // Log the API response for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching buses:", error);
    throw error;
  }
};

export const getBusById = async (id) => {
  try {
    const response = await apiClient.get(`/buses/${id}`);
    console.log("Bus Details Response:", response.data);  // Log the response for debugging
    return response.data;
  } catch (error) {
    console.error("Error fetching bus:", error);
    throw error;
  }
};


export const createBusBooking = async (busId, departureDate, returnDate) => {
  try {
    const response = await apiClient.post(
      "/buses/bookings",
      null,
      { params: { busId, departureDate, returnDate } }
    );
    console.log("Create Bus Booking Response:", response.data); // Log the response for debugging
    return response.data;
  } catch (error) {
    console.error("Error creating bus booking:", error);
    throw error;
  }
};
