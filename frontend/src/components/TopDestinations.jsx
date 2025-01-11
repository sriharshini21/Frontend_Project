// import React, { useState } from 'react';
// import '../App.css';// Import your CSS file
// import image1 from '../assets/images/image1.jpeg';
// import image2 from '../assets/images/image2.jpeg';
// import image3 from '../assets/images/image3.jpeg';
// import image4 from '../assets/images/image4.jpeg';
// import image5 from '../assets/images/image5.jpeg';
// import image6 from '../assets/images/image6.jpeg';

// const TopDestinations = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="top-destinations">
//       <h2>Top Destinations</h2>
//       <button className="arrow-left" onClick={handlePrev}>
//         &lt;
//       </button>
//       <div className="image-container">
//         <img src={images[currentIndex]} alt={`Destination ${currentIndex + 1}`} />
//       </div>
//       <button className="arrow-right" onClick={handleNext}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default TopDestinations;