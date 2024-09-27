import React from 'react';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import PropertyOffers from '../components/PropertyOffers';
import Services from '../components/Services';
import About from '../components/About';
import Agents from '../components/Agents';
import Contact from '../components/Contact';
import ToTop from '../components/ToTop';

const Home = () => {
    return (
        <main>
            <HomeHero />
            <Features />
            <PropertyOffers />
            <Services />
            <About />
            <Agents />
            <Contact />
            <ToTop />
        </main>
    );
};

export default Home;
