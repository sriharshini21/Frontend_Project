import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingComponent from "./components/BookingComponent";
import PropertyComponent from "./components/PropertyComponent";
import UserComponent from "./components/UserComponent";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import PropertyDetailsComponent from "./components/PropertyDetailsComponent";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bookings" element={<BookingComponent />} />
            <Route path="/properties" element={<PropertyComponent />} />
            <Route path="/users" element={<UserComponent />} />
            <Route path="/properties/:id" element={<PropertyDetailsComponent />} /> {/* Fix here */}
            <Route path="/bookings/:id" element={<BookingComponent />} />
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
