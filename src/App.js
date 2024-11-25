import logo from './logo.svg';
import './App.css';
import CardGrid from './CardGrid';
import TeamPage from './TeamPage'; // Import the new page
import ContactForm from './ContactForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CustomCarousel from './Carousel';
import Footer from './Footer';
import './Carousel.css'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SipCalculator from './SipCalculator';
import './SipCalculator.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<>
                <CustomCarousel />
                <CardGrid />
                <SipCalculator/>
              </>}
            />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
