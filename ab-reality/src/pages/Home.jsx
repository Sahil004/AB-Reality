import React from 'react';
import HomeHero from '../components/HomeHero';
import Features from '../components/Features';
import PropertyOffers from '../components/PropertyOffers';

const Home = () => {
    return (
        <main>
            <HomeHero />
            <Features />
            <PropertyOffers />
        </main>
    );
};

export default Home;
