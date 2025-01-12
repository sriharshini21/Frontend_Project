import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlightBookingComponent from "./components/FlightBookingComponent"; // Updated import
import PropertyComponent from "./components/PropertyComponent";
import UserComponent from "./components/UserComponent";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PropertyDetailsComponent from "./components/PropertyDetailsComponent";
import Login from "./components/Login";
import Error from "./components/Error";
import FlightsComponent from "./components/FlightsComponent";
import FlightDetailsComponent from "./components/FlightDetailsComponent"; // New import for flight details
import BookingComponent from "./components/BookingComponent"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/bookings" element={<FlightBookingComponent />} />
            <Route path="/properties" element={<PropertyComponent />} />
            <Route path="/users" element={<UserComponent />} />
            <Route path="/properties/:id" element={<PropertyDetailsComponent />} />
            <Route path="/bookings/:id" element={<BookingComponent />} />
            <Route path="/flights" element={<FlightsComponent />} />
            <Route path="/flights/:id" element={<FlightDetailsComponent />} /> {/* Route for flight details */}
            <Route path="/flights/booking/:id" element={<FlightBookingComponent />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
