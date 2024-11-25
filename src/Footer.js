
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  const [showChat, setShowChat] = useState(false); 
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');  // Redirects to the contact page
  };
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
        At SIMFIN Buildwealth, we specialize in financial services and investments.<br/> As an AMFI-registered distributor, 
        we are empanelled with all leading asset management companies.<br/> Our services include stock broking, mutual funds, initial public offerings (IPOs), 
        insurance and corporate fixed deposits.
        </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/simfin_buildwealth/?igsh=MTExajgzdTBseDFqaA%3D%3D" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>
    
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>
        Have questions? Reach out to our team for 
        <br/>reliable support on your investment journey!
        </p>
        <button className="footer-button"onClick={handleContactClick}>Contact Us</button>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>
          Address:<br />
          Simfin capital, office no 5, pancharatna apartment <br />
          above C.G. Ashtekar Jewellers, Karve road next to bank of Maharashtra,<br />
          Erandwane, Pune, Maharashtra 411004
        </p>
        <p>Phone: 020 25465391 </p>
        <p>Email: <a href="mailto:simfincapital@yahoo.com">simfincapital@yahoo.com</a></p>
      </div>

     
      <div className="footer-bottom">
        <p>Copyright 2024 ©  SIMFIN Buildwealth </p>
      </div>

    </footer>

  );
}

export default Footer;
