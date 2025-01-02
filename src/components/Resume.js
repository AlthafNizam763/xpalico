import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
import profile from '../assets/profile.jpg'; 
// Styled Components
const ResumeContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  padding: 40px;
  max-width: 800px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  line-height: 1.6;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
  text-align: center;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
`;

const SubHeading = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  color: #555;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #111;
  margin-top: 40px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #444;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
`;

const ProfilePic = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border: 3px solid #222;
`;

const ContactDetails = styled.div`
  font-size: 1.1rem;
  text-align: right;
`;

const ContactItem = styled.p`
  margin: 5px 0;
`;

const DownloadButton = styled.a`
  display: block;
  width: fit-content;
  margin: 30px auto;
  padding: 12px 30px;
  background-color: #111;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 8px;
  }
`;

const Resume = () => {
  return (
    <ResumeContainer>
      <Heading>Althaf Nizam</Heading>
      <SubHeading>Full-stack Developer</SubHeading>

      <ProfileContainer>
      <ProfilePic src={profile} alt="Profile" />
        <ContactDetails>
          <ContactItem>Email: althafnizam@gmail.com</ContactItem>
          <ContactItem>Phone: 9633146330</ContactItem>
          <ContactItem>Location: Ayur,Kollam,Kerala</ContactItem>
          <ContactItem>Website: www.xpalico.com</ContactItem>
        </ContactDetails>
      </ProfileContainer>

      <SectionTitle>Skills</SectionTitle>
      <List>
        <ListItem> HTML, CSS, Bootstrap, JavaScript, React, Node.js</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>Frameworks</ListItem>
        <ListItem>Git, GitHub, Version Control</ListItem>
        <ListItem>Problem-solving, Teamwork, Communication</ListItem>
      </List>

      <SectionTitle>Experience</SectionTitle>
      <List>
        <ListItem>
          <strong>Software Developer | docme cloud solutions</strong> (July 2024 - Present)
          <p>Developed full-stack web applications</p>
        </ListItem>
      </List>

      <SectionTitle>Education</SectionTitle>
      <List>
        <ListItem>
          <strong>Diploma in Computer Science and Engineering</strong> |(Graduated: May 2024)
          <p>Relevant coursework: Data Structures, Algorithms, Web Development.</p>
        </ListItem>
      </List>

      <SectionTitle>Certifications</SectionTitle>
      <List>
        <ListItem>AWS Workshop for Flipkart Clone using HTML, CSS & JavaScript | 2024</ListItem>
        <ListItem>Coursera: Building a Business Presence with Facebook Marketing | 2024</ListItem>
      </List>

      <SectionTitle>Projects</SectionTitle>
      <List>
      <ListItem>
          <strong>Seven Petals Website:</strong> Seven Petals is a fully functional e-commerce website designed for plant enthusiasts looking to buy, sell, and explore a variety of plants and gardening products online.
        </ListItem>
      <ListItem>
          <strong>Website for Fuel Delivery:</strong> The Fuel Delivery is an innovative solution designed to streamline the process of delivering fuel to various locations.
        </ListItem>
        <ListItem>
          <strong>Portfolio Website:</strong> A personal portfolio built with React.
        </ListItem>
      </List>

      <DownloadButton href="/resume.pdf" download>
  Download Resume <FaDownload />
      </DownloadButton>

    </ResumeContainer>
  );
};

export default Resume;
