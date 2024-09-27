import React from 'react';
import team1 from '../assets/team-1.webp';
import team2 from '../assets/team-2.webp';
import team3 from '../assets/team-3.webp';
import team4 from '../assets/team-4.webp';

const Agents = () => {
    return (
        <section className="container-fluid agents-section" id="agents">
            <div className="container">
                <div
                    className="section-top pb-4 text-center"
                    data-aos="fade-up" // Animating the section title
                    data-aos-duration="1200"
                >
                    <span className="section-sub-heading text-uppercase" data-aos="fade-up" data-aos-delay="200">
                        Agents
                    </span>
                    <h2 className="section-heading fs-1" data-aos="fade-up" data-aos-delay="400">
                        Our Agents
                    </h2>
                </div>
                <div className="row">
                    {[team1, team2, team3, team4].map((teamImg, index) => (
                        <div
                            key={index}
                            className="col-md-3"
                            data-aos="fade-up" // Add animation to the agent cards
                            data-aos-duration="1200"
                            data-aos-delay={`${200 * (index + 1)}`} // Add staggered delay for each card
                        >
                            <div className="agent">
                                <div className="agent-img">
                                    <img src={teamImg} className="img-fluid" alt="agent" />
                                    <div className="desc">
                                        <h3 className='px-3 py-2'>
                                            {index === 0 && 'Carlos Henderson'}
                                            {index === 1 && 'Johnathan Smith'}
                                            {index === 2 && 'Emily Johnson'}
                                            {index === 3 && 'Sophia Davis'}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Agents;
