import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingComponent from "./components/BookingComponent";
import PropertyComponent from "./components/PropertyComponent";
import UserComponent from "./components/UserComponent";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import PropertyDetailsComponent from "./components/PropertyDetailsComponent";
import Login from "./components/Login";
import Error from "./components/Error";

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
            <Route path="/properties" element={<PropertyComponent />} />
            <Route path="/users" element={<UserComponent />} />
            <Route path="/properties/:id" element={<PropertyDetailsComponent />} />
            <Route path="/bookings/:id" element={<BookingComponent />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
