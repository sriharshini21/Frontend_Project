import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlideshow from './ImageSlideShow'; // Import the slideshow component
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import image6 from '../assets/images/image6.jpeg';
import property1 from '../assets/images/property1.jpeg';
import property2 from '../assets/images/property2.jpeg';
import property3 from '../assets/images/property3.jpeg';
import property4 from '../assets/images/property4.jpeg';
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
        <p>
          Discover, book, and manage your properties effortlessly!!!
        </p>
        {/* <nav>
          <ul>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
      </div>

      {/* Add the ImageSlideshow component here */}
      {/* <ImageSlideshow />  */}

      {/* <footer>
        <p>&copy; 2025 Property Booking System</p>
      </footer> */}

      <div className="top-destinations">
        <h2>Explore India</h2>
        <ImageSlideshow /> 
        <h3>Top Destinations</h3>
        <p>These popular destinations have a lot to offer</p>
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
        </div>

        <div className="explore-india">
          {/* ... (Your existing Top Destinations code) ... */}
          <div className="unique-properties">
            <h2>Stay at our top unique properties</h2>
            <p>From castles and villas to boats and igloos, we've got it all</p>
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
            <button className="arrow-right">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <footer>
        <div className="about-us">
          <h2>About Us</h2>
          {/* <img src={aboutUsImage} alt="About Us Image" className="about-us-image" /> */}
          <p>
            We are a team of passionate developers dedicated to creating a seamless and enjoyable property booking experience for our users. 
            We strive to provide a platform that connects travelers with unique and exciting accommodations around the world.
          </p>
          <p>
            We believe in [mention your core values, e.g., customer satisfaction, transparency, sustainability].
          </p>
        </div>
        <p>&copy; 2025 Property Booking System</p>
      </footer>

    </div>
  );
};

export default HomePage;