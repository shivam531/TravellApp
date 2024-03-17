// DestinationsSection.js
import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2 className="destinations__title">Popular Destinations</h2>
      <div className="destinations__grid">
        {/* Individual Destination Cards */}
        <div className="destination">
          <img src="" alt="Destination 1" />
          <h3 className="destination__title">Destination 1</h3>
          <p className="destination__description">Description of Destination 1</p>
        </div>
        <div className="destination">
          <img src="destination2.jpg" alt="Destination 2" />
          <h3 className="destination__title">Destination 2</h3>
          <p className="destination__description">Description of Destination 2</p>
        </div>
        {/* Add more destination cards as needed */}
      </div>
    </section>
  );
};

export default DestinationsSection;
