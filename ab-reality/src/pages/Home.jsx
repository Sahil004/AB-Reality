import React from 'react';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import PropertyOffers from '../components/PropertyOffers';
import Services from '../components/Services';
import About from '../components/About';
import Agents from '../components/Agents';

const Home = () => {
    return (
        <main>
            <HomeHero />
            <Features />
            <PropertyOffers />
            <Services />
            <About />
            <Agents />
        </main>
    );
};

export default Home;
