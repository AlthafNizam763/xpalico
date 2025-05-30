import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './componets2/Login';
import DashBoard from './componets2/DashBoard';
import Messages from './componets2/Messages';
import Resume from './components/Resume';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Message from './components/Message';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<DashBoard />} />
         <Route path="/messages" element={<Messages />} />
        <Route
          path="/xpalico"
          element={
            <>
             <Navbar />
              <Resume />
              <HeroSection />
              <AboutMe />
              <Projects />
              <Message />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
