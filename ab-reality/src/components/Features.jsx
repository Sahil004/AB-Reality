import React from 'react';

const featureData = [
    {
        icon: "fa fa-users fa-2x py-3 fs-1",
        heading: "Trusted by Thousands",
        description: "Over the years, we’ve served thousands of satisfied customers."
    },
    {
        icon: "fa fa-home fa-2x py-3 fs-1",
        heading: "Wide Range of Properties",
        description: "From luxury apartments to beach houses, we offer diverse properties."
    },
    {
        icon: "fa fa-money-bill-wave fa-2x py-3 fs-1",
        heading: "Financing Made Easy",
        description: "Our team provides great deals and financing options tailored for you."
    },
    {
        icon: "fa fa-lock fa-2x py-3 fs-1",
        heading: "Locked-in Pricing",
        description: "Secure your dream home with locked-in pricing before the market shifts."
    }
];

const Features = () => {
    return (
        <section className="container-fluid features py-5" id="features">
            <div className="container">
                <div className="row text-center">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className={`col-md-6 col-lg-3 py-4 ${index !== 0 ? ' border-lg-start border-bottom-sm border-white' : ''}`}
                            data-aos="fade-up"  // AOS fade-up animation
                            data-aos-delay={`${index * 200}`}
                        >
                            <i className={`${feature.icon} text-light mb-3`}></i>
                            <h2 className="features-heading text-light">{feature.heading}</h2>
                            <p className="features-description text-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
