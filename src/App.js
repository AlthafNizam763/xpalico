import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Resume from './components/Resume';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
// import Message from './components2/Message';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
             <Navbar />
              <Resume />
              <HeroSection />
              <AboutMe />
              <Projects />
              {/* <Message /> */}
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
