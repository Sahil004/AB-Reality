import React from 'react';

const featureData = [
    {
        icon: "fa fa-users fa-2x py-3 fs-1",
        heading: "Trusted by Thousands",
        description: "We have served thousands of happy customers over the years."
    },
    {
        icon: "fa fa-home fa-2x py-3 fs-1",
        heading: "Wide Range of Properties",
        description: "We offer properties ranging from luxury apartments to beach houses."
    },
    {
        icon: "fa fa-money-bill-wave fa-2x py-3 fs-1",
        heading: "Financing Made Easy",
        description: "Our team helps you get the best deals and financing options."
    },
    {
        icon: "fa fa-lock fa-2x py-3 fs-1",
        heading: "Locked in Pricing",
        description: "Secure your property with locked-in pricing before prices increase."
    }
];

const Features = () => {
    return (
        <section className="container-fluid features py-4">
            <div className="container">
                <div className="row">
                    {featureData.map((feature, index) => (
                        <div key={index} className={`col-md-6 col-lg-3 text-center py-4 px-4 text-white ${index !== 0 ? 'border-start border-white' : ''}`}>
                            <i className={feature.icon}></i>
                            <h2 className="features-heading">{feature.heading}</h2>
                            <p className='features-description'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
