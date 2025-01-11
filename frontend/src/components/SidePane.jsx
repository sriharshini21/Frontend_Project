import React, { useState } from 'react';

const SidePane = () => {
  const [isSidepaneOpen, setIsSidepaneOpen] = useState(false);

  const toggleSidepane = () => {
    setIsSidepaneOpen(!isSidepaneOpen);
  };

  return (
    <div className={`sidepane ${isSidepaneOpen ? 'open' : ''}`}> 
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Bookings</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">Users</a></li>
        <li><a href="#">Trains</a></li>
        <li><a href="#">Buses</a></li>
      </ul>
    </div>
  );
};

export default SidePane;