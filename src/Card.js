import React from 'react';
import './Card.css';

const Card = ({ image, title, content }) => {
    return (
        <div className="custom-card">
            <img src={image} alt={title} className="custom-card-image" />
            <div className="custom-card-content">
                <h3 className="custom-card-title">{title}</h3>
                <p className="custom-card-text">{content}</p>
            </div>
        </div>
    );
};

export default Card;
