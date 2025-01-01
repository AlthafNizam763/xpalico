import React from 'react';
import styled from 'styled-components';

// Import project images
import fuelDeliveryImage from '../assets/Fuel Delivery.jpeg';
import sevenPetalsImage from '../assets/Seven Petals.jpeg';
import portfolioImage from '../assets/Portfolio.png';

// Styled component for the Projects container
const ProjectsContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  text-align: center;
  flex-direction: column;
`;

// Wrapper for projects to align them horizontally
const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; /* Adds space between project items */
  flex-wrap: wrap; /* Allows the items to wrap on smaller screens */
  max-width: 1200px; /* Limit the width of the projects section */
`;

// Styled component for each project card
const ProjectCard = styled.div`
  background-color: #444;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

// Styled component for the project image
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

// Heading styling
const Heading = styled.h3`
  font-weight: bold;  
  font-size: 2.5em; /* Increased font size */
  margin-bottom: 10px; /* Added space between heading and paragraph */
  letter-spacing: 1px; /* Added letter-spacing for a clean, modern feel */
  text-transform: uppercase; /* Added uppercase styling for a bold statement */
`;

const StyledH3 = styled.h3`
  font-weight: bold;  /* Make the "Skills & Technologies" title bold */
`;

// Projects component
const Projects = () => {
  return (
    <ProjectsContainer>
      <Heading>My Projects</Heading>

      {/* Wrapper for all projects */}
      <ProjectsWrapper>
        {/* Fuel Delivery Project */}
        <ProjectCard>
          <ProjectImage src={fuelDeliveryImage} alt="Fuel Delivery" />
          <StyledH3>Fuel Delivery</StyledH3>
          <p>The Fuel Delivery Management System is an innovative solution designed to streamline the process of delivering fuel to various locations, ensuring efficiency, safety, and real-time tracking. This system is tailored for fuel distribution companies to manage deliveries, monitor inventory, track fuel trucks, and improve customer satisfaction.</p>
        </ProjectCard>

        {/* Seven Petals Project */}
        <ProjectCard>
          <ProjectImage src={sevenPetalsImage} alt="Seven Petals" />
          <StyledH3>Seven Petals</StyledH3>
          <p>Seven Petals is a fully functional e-commerce website designed for plant enthusiasts looking to buy, sell, and explore a variety of plants and gardening products online. This project is built using modern web technologies like React, PHP, and jQuery, with a focus on providing a user-friendly experience, secure transactions, and seamless navigation.</p>
        </ProjectCard>

        {/* Portfolio Project */}
        <ProjectCard>
          <ProjectImage src={portfolioImage} alt="Portfolio" />
          <StyledH3>Portfolio</StyledH3>
          <p>My Portfolio Website is a personal showcase of my skills, projects, and accomplishments as a self-taught developer. This website serves as an online resume and an interactive experience where potential clients, employers, or collaborators can explore my work, learn about my background, and get in touch.</p>
        </ProjectCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
