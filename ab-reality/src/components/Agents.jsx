import React from 'react'
import team1 from '../assets/team-1.webp';
import team2 from '../assets/team-2.webp';
import team3 from '../assets/team-3.webp';
import team4 from '../assets/team-4.webp';
const Agents = () => {
    return (
        <section className="container-fluid agents-section" id="agents">
            <div className="container">
                <div className="section-top pb-4 text-center">
                    <span className="section-sub-heading text-uppercase">Agents</span>
                    <h2 className="section-heading fs-1">Our Agents</h2>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="agent">
                            <div className="agent-img">
                                <img src={team1} className="img-fluid" alt="agent" />
                                <div className="desc">
                                    <h3 className='px-3 py-2'>Carlos Henderson</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agent">
                            <div className="agent-img">
                                <img src={team2} className="img-fluid" alt="agent" />
                                <div className="desc">
                                    <h3 className='px-3 py-2'>Johnathan Smith</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agent">
                            <div className="agent-img">
                                <img src={team3} className="img-fluid" alt="agent" />
                                <div className="desc">
                                    <h3 className='px-3 py-2'>Emily Johnson</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="agent">
                            <div className="agent-img">
                                <img src={team4} className="img-fluid" alt="agent" />
                                <div className="desc">
                                    <h3 className='px-3 py-2'>Sophia Davis</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Agents