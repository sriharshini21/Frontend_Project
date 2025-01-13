import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlideshow from './ImageSlideShow'; // Import the slideshow component
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import image7 from '../assets/images/image7.jpeg';
import image8 from '../assets/images/image8.jpeg';
import property1 from '../assets/images/property1.jpeg';
import property2 from '../assets/images/property2.jpeg';
import property3 from '../assets/images/property3.jpeg';
import property4 from '../assets/images/property4.jpeg';
import gallery1 from '../assets/images/gallery1.jpeg';
import gallery2 from '../assets/images/gallery2.jpeg';
import gallery3 from '../assets/images/gallery3.jpeg';
import gallery4 from '../assets/images/gallery4.jpeg';
import gallery5 from '../assets/images/gallery5.jpeg';
import gallery6 from '../assets/images/gallery6.jpeg';
import gallery7 from '../assets/images/gallery7.jpeg';
import gallery8 from '../assets/images/gallery8.jpeg';
import gallery9 from '../assets/images/gallery9.jpeg';
import gallery10 from '../assets/images/gallery10.jpeg';
//import aboutUsImage from '../assets/images/about-us-image.jpg'; // Add your image here
import '../App.css';
import SidePane from './SidePane';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to the Property Booking System</h1>
      </header>
      <div className="home-content">
        <h2 className="welcome-heading">Discover, Book, and Manage Your Properties Effortlessly!</h2>
        <p>
          Your journey to finding the perfect property starts here. 
          Explore a wide range of options, book your stay with ease, and manage 
          your reservations all in one place. 
        </p>
      </div>

      {/* Add the ImageSlideshow component here */}
      {/* <ImageSlideshow />  */}

      {/* <footer>
        <p>&copy; 2025 Property Booking System</p>
      </footer> */}

      <div className="top-destinations">
        <h2>
          <span style={{ color: 'orange' }}>E</span>
          <span style={{ color: 'grey' }}>x</span>
          <span style={{ color: 'green' }}>p</span>
          <span style={{ color: 'orange' }}>l</span>
          <span style={{ color: 'grey' }}>o</span>
          <span style={{ color: 'green' }}>r</span>
          <span style={{ color: 'orange' }}>e</span>
          <span style={{ color: 'grey' }}> </span>
          <span style={{ color: 'green' }}>I</span>
          <span style={{ color: 'orange' }}>n</span>
          <span style={{ color: 'grey ' }}>d</span>
          <span style={{ color: 'green' }}>i</span>
          <span style={{ color: 'orange' }}>a</span>
        </h2>
        <ImageSlideshow />
        <h2 className="destination-heading">Top Destinations</h2>
        <p>Embark on unforgettable journeys to these captivating destinations.</p>
        <div className="destination-images">
          <a href="#">
            <img src={image1} alt="Destination 1" />
            <p>Hyderabad</p>
          </a>
          <a href="#"><img src={image2} alt="Destination 2" />
            <p>Delhi</p>
          </a>
          <a href="#"><img src={image3} alt="Destination 3" />
            <p>Bangalore</p>
          </a>
          <a href="#"><img src={image4} alt="Destination 4" />
            <p>Goa</p>
          </a>
          <a href="#"><img src={image5} alt="Destination 5" />
            <p>Shimla</p>
          </a>
          <a href="#"><img src={image6} alt="Destination 6" />
            <p>Vizag</p>
          </a>

          <a href="#"><img src={image7} alt="Destination 6" />
            <p>Mumbai</p>
          </a>

          <a href="#"><img src={image8} alt="Destination 6" />
            <p>Pondicherry</p>
          </a>
        </div>

        <div className="explore-india">
          {/* ... (Your existing Top Destinations code) ... */}
          <div className="unique-properties">
            <h2>Stay at our top unique properties</h2>
            <p>From luxurious villas to cozy cottages, find your perfect getaway.</p>
            <button className="arrow-left">
              &lt;
            </button>
            <div className="property-cards">
              <div className="property-card">
                <img src={property1} alt="The Leela Palace Chennai" />
                <h3>The Leela Palace Chennai</h3>
                <p>South Chennai, India, Chennai</p>
                <div className="rating">
                  <span>8.4</span>
                  <p>Fabulous 7,357 reviews</p>
                </div>
              </div>
              <div className="property-card">
                <img src={property2} alt="Heritage Madurai" />
                <h3>Heritage Madurai</h3>
                <p>India, Madurai</p>
                <div className="rating">
                  <span>8.4</span>
                  <p>Very good 1,320 reviews</p>
                </div>
              </div>
              <div className="property-card">
                <img src={property3} alt="The Oberoi Gurgaon" />
                <h3>The Oberoi Gurgaon</h3>
                <p>Udyog Vihar, India, Gurgaon</p>
                <div className="rating">
                  <span>9.4</span>
                  <p>Superb 690 reviews</p>
                </div>
              </div>

              <div className="property-card">
                <img src={property4} alt="Novotel Imagicaa Khopoli" />
                <h3>Novotel Imagicaa Khopoli</h3>
                <p>India, Khopoli</p>
                <div className="rating">
                  <span>6.5</span>
                  <p>Pleasant 814 reviews</p>
                </div>
              </div>

              {/* <div className="property-card">
                <img src={property4} alt="Novotel Imagicaa Khopoli" />
                <h3>Novotel Imagicaa Khopoli</h3>
                <p>India, Khopoli</p>
                <div className="rating">
                  <span>6.5</span>
                  <p>Pleasant 814 reviews</p>
                </div>
              </div> */}

            </div>
          </div>
          {/* <button className="arrow-right">
            &gt;
          </button> */}
        </div>

           {/* Photo Gallery Section */}
           <div className="photo-gallery">
          <h2>Photo Gallery</h2>
          <p>Explore the beauty of our properties and destinations through these stunning images.</p>
          <div className="gallery-images">
            <a href="#"><img src={gallery1} alt="Gallery Image 1" /></a>
            <a href="#"><img src={gallery2} alt="Gallery Image 2" /></a>
            <a href="#"><img src={gallery3} alt="Gallery Image 3" /></a>
            <a href="#"><img src={gallery4} alt="Gallery Image 4" /></a>
            <a href="#"><img src={gallery5} alt="Gallery Image 5" /></a>
            <a href="#"><img src={gallery6} alt="Gallery Image 6" /></a>
            <a href="#"><img src={gallery7} alt="Gallery Image 7" /></a>
            <a href="#"><img src={gallery8} alt="Gallery Image 8" /></a>
            <a href="#"><img src={gallery9} alt="Gallery Image 8" /></a>
            <a href="#"><img src={gallery10} alt="Gallery Image 8" /></a>
          </div>
        </div>
      </div>

      <footer>
      <div className="about-us">
  <h2>About Us</h2>
  <p>
    Welcome to our Property Booking System, where your travel dreams become a reality. We are a passionate team of developers, designers, and travel enthusiasts dedicated to providing you with the ultimate booking experience. Our platform allows you to easily explore, book, and manage properties with just a few clicks.
  </p>

  <p>
    Founded with the vision of simplifying travel planning, our system helps you discover the most unique and luxurious properties across India. Whether you are looking for a serene beachfront villa, a cozy mountain retreat, or a city center hotel, we have something for every traveler.
  </p>

  <p>
    Our team values <strong>innovation</strong>, <strong>customer satisfaction</strong>, and <strong>sustainability</strong>. We constantly strive to improve and innovate our platform to meet your evolving needs. With 24/7 customer support, secure payment options, and a user-friendly interface, we make booking your perfect stay hassle-free.
  </p>

  <h3>Our Core Values</h3>
  <div className="core-values">
    <div className="value">
      <h4>Customer Satisfaction</h4>
      <p>We prioritize our customers and aim to exceed their expectations with every interaction.</p>
    </div>
    <div className="value">
      <h4>Innovation</h4>
      <p>We are always looking for new ways to improve our services and provide innovative solutions to our users.</p>
    </div>
    <div className="value">
      <h4>Sustainability</h4>
      <p>We are committed to supporting sustainable tourism and eco-friendly properties that have a positive impact on the environment.</p>
    </div>
  </div>

  <h3>Why Choose Us?</h3>
  <p>
    Whether you're traveling for business or leisure, our platform offers a seamless booking experience with a wide selection of properties. We ensure that all our properties are verified and offer the best amenities to make your stay comfortable and memorable.
  </p>
  <ul>
    <li>Wide range of properties from budget to luxury</li>
    <li>Instant booking confirmation</li>
    <li>24/7 customer support</li>
    <li>Secure and easy-to-use payment system</li>
  </ul>
</div>
        <p>&copy; 2025 Property Booking System</p>
      </footer>
    </div>
  );
};

export default HomePage;