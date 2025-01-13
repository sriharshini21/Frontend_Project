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
import TrainsComponent from "./components/TrainComponent"; // Import for train list
import TrainDetailsComponent from "./components/TrainDetailsComponent"
import TrainBookingComponent from "./components/TrainBookingComponent";
import BusComponent from "./components/BusComponent";
import BusDetailsComponent from "./components/BusDetailsComponent";
import BusBookingComponent from "./components/BusBookingComponent";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/bookings" element={<BookingComponent />} />
            <Route path="/bookings/:id" element={<BookingComponent />} />
            <Route path="/properties" element={<PropertyComponent />} />
            <Route path="/users" element={<UserComponent />} />
            <Route path="/properties/:id" element={<PropertyDetailsComponent />} />
            <Route path="/book/:id" element={<FlightBookingComponent />} />
            <Route path="/flights" element={<FlightsComponent />} />
            <Route path="/flights/:id" element={<FlightDetailsComponent />} /> {/* Route for flight details */}
            <Route path="/flights/booking/:id" element={<FlightBookingComponent />} />
            <Route path="/error" element={<Error />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/trains" element={<TrainsComponent />} />
            <Route path="/trains/:id" element={<TrainDetailsComponent />} />
            <Route path="/trains/booking/:id" element={<TrainBookingComponent />} />

              <Route path="/buses" element={<BusComponent />} />
              <Route path="/buses/:id" element={<BusDetailsComponent />} />
              <Route path="/buses/booking/:id" element={<BusBookingComponent />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
