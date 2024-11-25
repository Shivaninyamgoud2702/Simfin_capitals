// CustomCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Carousel.css';
import image_1 from './assets/images/image_1.jpeg';
import image_2 from './assets/images/image_2.jpeg';
import image_3 from './assets/images/image_3.jpeg';

const CustomCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel interval={2000} controls={true} indicators={true} fade={true}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image_1}
                        alt="Market Analysis"
                    />
                    <Carousel.Caption>
                        <h3>Market Analysis</h3>
                        <p>Get insights on the latest market trends.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image_2}
                        alt="Investment Strategies"
                    />
                    <Carousel.Caption>
                        <h3>Investment Strategies</h3>
                        <p>Build smart strategies for better investments.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={image_3}
                        alt="Financial Planning"
                    />
                    <Carousel.Caption>
                        <h3>Financial Planning</h3>
                        <p>Plan your financial future with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CustomCarousel;
