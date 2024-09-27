import React from 'react';

const serviceData = [
    {
        number: "01",
        heading: "Evaluate Property",
        description: "Get a comprehensive evaluation of your property’s market value with expert insights and personalized recommendations."
    },
    {
        number: "02",
        heading: "Meet Your Agent",
        description: "Work with experienced agents who offer tailored advice to help you find or sell your ideal property."
    },
    {
        number: "03",
        heading: "Close the Deal",
        description: "Negotiate and secure the best possible deal with expert support throughout the buying or selling process."
    },
    {
        number: "04",
        heading: "Have Your Property",
        description: "Finalize your purchase and own the property you've always wanted, with complete peace of mind."
    }
];

const Services = () => {
    return (
        <section className="container-fluid services-section" id='services'>
            <div className="container">
                <div className="services">
                    <div className="section-top pb-5 text-center">
                        <span className="section-sub-heading text-uppercase" data-aos="fade-up" data-aos-delay="100">Work Flow</span>
                        <h2 className="section-heading text-white fs-1" data-aos="fade-up" data-aos-delay="300">How It Works</h2>
                    </div>
                </div>
                <div className="row">
                    {serviceData.map((service, index) => (
                        <div
                            key={index}
                            className="col-md-3 text-center py-4 px-4 text-white"
                            data-aos="fade-up" // AOS animation
                            data-aos-delay={`${index * 200 + 400}`} // Increment delay for each item
                        >
                            <div className="d-flex justify-content-center align-items-center service-icon mb-3">
                                <span>{service.number}</span>
                            </div>
                            <h2 className="service-heading pb-2">{service.heading}</h2>
                            <p className='service-description'>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
