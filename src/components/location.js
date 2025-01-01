import React from 'react';
import styled from 'styled-components';

// Styled component for the location page container
const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4; /* Light background for the page */
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.2em;
  color: #666;
  max-width: 800px;
  text-align: center;
  margin-bottom: 30px;
`;

const MapContainer = styled.div`
  width: 80%;
  height: 400px;
  background-color: #eaeaea; /* Placeholder for the map */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Slight shadow for better visibility */
`;

const GoogleMapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

// Location component
const Location = () => {
  return (
    <LocationContainer>
      <Heading>Location</Heading>
      <Subheading>
        Here’s where you can find us! We’re located at the heart of the city, with easy access from various parts.
        Feel free to reach out if you have any questions.
      </Subheading>
      <MapContainer>
        {/* Embed Google Map */}
        <GoogleMapIframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180.92919900444343!2d76.8218906212758!3d8.884538191699791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e0a671ebf08f%3A0xc9303e8c9a8c2f9d!2sCheriyavelinalloor%2C%20Kerala%20691516!5e1!3m2!1sen!2sin!4v1735725321279!5m2!1sen!2sin"          allowFullScreen
          loading="lazy"
        ></GoogleMapIframe>
      </MapContainer>
    </LocationContainer>
  );
};

export default Location;
