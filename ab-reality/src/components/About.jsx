import React from 'react';
import about from "../assets/about.jpg";

const About = () => {
    return (
        <section className="container about-section" id="about">
            <div className="row">
                <div
                    className="col-md-5 about-content py-5"
                    data-aos="fade-right" // Add animation
                    data-aos-duration="1200"
                >
                    <div className="section-top pb-4 text-center">
                        <span
                            className="section-sub-heading text-uppercase"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Who We Are
                        </span>
                        <h2
                            className="section-heading text-uppercase fs-1"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            Ab Reality & Rental Hub
                        </h2>
                    </div>
                    <p className="about-paragraph" data-aos="fade-up" data-aos-delay="500">
                        At Ab reality & Rental Hub, we specialize in providing expert real estate services tailored to your unique needs. With a proven track record in property transactions, our focus is on delivering value through personalized service and deep market insights.
                    </p>
                    <p className="about-paragraph" data-aos="fade-up" data-aos-delay="600">
                        Our team of professionals is committed to guiding you through every step, from finding the right property to closing the deal. Whether you're buying, selling, or renting, we ensure a seamless experience with complete transparency.
                    </p>
                    <p className="about-paragraph" data-aos="fade-up" data-aos-delay="700">
                        We take pride in offering a diverse portfolio of properties, including residential homes, commercial spaces, and investment opportunities. Our mission is to help you make informed decisions that lead to long-term success and satisfaction.
                    </p>
                    <p className="about-paragraph" data-aos="fade-up" data-aos-delay="800">
                        Let us be your trusted partner in your real estate journey, delivering exceptional results and ensuring you find the perfect property.
                    </p>
                </div>
                <div
                    className="col-md-7 about-image"
                    data-aos="fade-left" // Add animation for the image
                    data-aos-duration="1200"
                    data-aos-delay="400"
                >
                    <img src={about} alt="about-us"/>
                </div>
            </div>
        </section>
    );
}

export default About;
