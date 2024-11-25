import React, { useState } from 'react';
import './TeamPage.css'; // Import the CSS file for styling
import director1 from './assets/images/director1.jpeg';
import director2 from './assets/images/director2.png';
import centerIcon from './assets/images/company-icon.png';
const directors = [
    {
        name: "Samkit Shah",
        role: "Founder",
        description: "Our Founder and Director, Samkit Shah, graduated with a Bachelor of Commerce degree from Brihan Maharashtra College of Commerce in 2011. He has been accustomed to the stock market since the age of 17 and has been an AMFI-registered mutual fund distributor since 2015. Additionally, he has been an authorized person registered with the NSE, BSE, and MCX since 2011. With 15 years of experience in the financial services industry, he has received an award in International Wealth Management from Moody's Analytics in April 2024.",
        image: director1
    },
    {
        name: "Tejal Shah",
        role: "Company Secretary",
        description: " Our Director, Tejal Shah, is a Company Secretary with a Bachelor of Commerce degree from Symbiosis College. She manages matters related to company compliance and legal requirements.",
        image: director2
    }
];

const TeamPage = () => {
    return (
        <div className="team-page-container">
                 <div className="center-background">
                  <div className="center-content">
                <img src={centerIcon} alt="Center Icon" className="center-icon" />
                <h1 className="company-name">SIMFIN BUILDWEALTH</h1>
                </div>
            </div>      
            <h1 className="team-page-title">Directors</h1>
            <p className='team-page-text'>Meet the amazing team behind Simfin Buildwealth!</p>
            <div className="director-cards">
                {directors.map((director, index) => (
                    <DirectorCard key={index} director={director} />
                ))}
            </div>
        </div>
    );
};

const DirectorCard = ({ director }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="director-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={director.image} alt={director.name} className="director-image" />
            {isHovered && (
                <div className="director-info">
                    <h2>{director.name}</h2>
                    <h3>{director.role}</h3>
                    <p>{director.description}</p>
                </div>
            )}
        </div>
    );
};

export default TeamPage;
