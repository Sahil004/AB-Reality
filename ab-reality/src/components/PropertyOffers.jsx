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
        <section className="container-fluid properties" id='properties'>
            <div className="container">
                <div className="property-offers">
                    <div className="section-top pb-5 text-center">
                        <span className="section-sub-heading text-uppercase">What We Offer</span>
                        <h2 className="section-heading">Featured Properties</h2>
                    </div>
                    <Slider {...settings}>
                        {properties.map((property) => (
                            <div key={property.id} className="property-item px-3 position-relative">
                                <div className='property-box pb-3'>
                                    <div className="property-image-wrapper ">
                                        <img
                                            src={`http://localhost:5000${property.image}`} // Access image from the backend
                                            alt={property.name}
                                            className="property-image"
                                        />
                                        <div className="property-overlay">
                                            <span className="property-type">{property.type}</span>
                                            <span className="property-price">{property.price}</span>
                                        </div>
                                    </div>
                                    <h3>{property.name}</h3>
                                    <p>{property.location}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default PropertyOffers;
