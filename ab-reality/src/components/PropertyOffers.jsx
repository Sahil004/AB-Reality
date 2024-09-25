// src/components/PropertyOffers.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const PropertyOffers = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from the backend
        fetch('http://localhost:5000/api/PropertySearch')
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error('Error fetching properties:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="container-fluid properties">
            <div className="container">
                <div className="property-offers">
                    <div className="section-top pb-5 text-center">
                        <span className="section-sub-heading text-uppercase">What We Offer</span>
                        <h2 className='section-heaidng'>Featured Properties</h2>
                    </div>
                    <Slider {...settings}>
                        {properties.map((property) => (
                            <div key={property.id} className="property-item">
                                <img src={property.image} alt={property.name} className="property-image" />
                                <h3>{property.name}</h3>
                                <p>{property.location}</p>
                                <p>{property.price}</p>
                                <p>{property.type}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PropertyOffers;
