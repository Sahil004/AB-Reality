import React from 'react';

const HomeHero = () => {
    return (
        <section className='container-fluid hero-section' id='home'>
            <div className="overlay"></div>
            <div className="container hero">
                <div className="row align-items-center hero-page text-center text-md-start">
                    <div
                        className="col-md-10 col-lg-6"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                    >
                        {/* Hero Heading */}
                        <h1
                            className="hero-heading text-light"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="500"
                        >
                            Find Your<br />Dream Home Today!
                        </h1>

                        {/* Hero Content */}
                        <p
                            className="hero-content text-light"
                            data-aos="fade-up"
                            data-aos-duration="1300"
                            data-aos-delay="700"
                        >
                            Browse through the best properties in Pune. Whether you're looking to buy, sell, or rent, we've got you covered!
                        </p>

                        {/* Call-to-Action Buttons */}
                        <div
                            className="d-md-flex justify-content-center justify-content-md-start"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-delay="900"
                        >
                            <a
                                className="btn service-button rounded-2 me-0 me-md-4 mb-3 mb-md-0"
                                href="/properties"
                            >
                                View Listings
                            </a>
                            <a
                                className="btn service-button rounded-2"
                                href="/contact"
                                target="_blank"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
