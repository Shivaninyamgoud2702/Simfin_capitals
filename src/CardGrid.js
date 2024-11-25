import React, { useEffect } from 'react';
import Card from './Card';
import './CardGrid.css';
import mutual_funds from './assets/images/Mutual_fund.jpeg';
import equity from './assets/images/equity.jpeg';
import IPO from './assets/images/IPO.jpeg';
import commodities from './assets/images/Commodities.jpeg';
import money_transfer from './assets/images/Money_transfer.jpeg';
import forex from './assets/images/Forex.jpeg';
import insurance from './assets/images/Insurance.jpeg';
import currency from './assets/images/Currency.jpeg';
const CardGrid = () => {
  // Dynamically load hoverEffects.js after component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  const cardsData = [
    { image: equity, title: 'Equities', content: 'Invest in top-performing stocks and harness the potential of equity markets to grow your wealth' },
    { image: commodities, title: 'Commodities', content: 'Diversify your portfolio with commodities trading, from gold to oil, and capitalize on market fluctuations.' },
    { image: currency, title: 'Currency', content: 'Navigate the dynamic currency markets and seize opportunities with our expert forex trading services.' },
    { image: IPO, title: 'IPO', content: 'Participate in Initial Public Offerings (IPOs) and get early access to promising companies before they go public' },
    { image: mutual_funds, title: 'Mutual Funds', content:'Participate in Initial Public Offerings (IPOs) and get early access to promising companies before they go public' },
    { image: insurance, title: 'Insurance', content: 'Protect your investments and secure your future with comprehensive insurance solutions tailored to your needs' },
    { image: forex, title: 'Forex', content: 'Maximize your trading potential with our advanced forex tools and insights and be a better trader.' },
    { image: money_transfer, title: 'Money Transfer', content:'Effortlessly transfer money across borders with our fast, secure, and reliable money transfer services' },
  ];

  return (
    <div className="card-container">
      <h1 className="services-title">Services</h1>
      <hr className="divider" />
      <div className="card-grid">
        {cardsData.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
