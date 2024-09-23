import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add 'scrolled' class when the user scrolls down
    let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-light'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <nav className={navbarClasses.join(' ')}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <div className='logo'>
                        <img src="/ab-reality-logo.png" alt="AB Reality" className='logo-img' />
                    </div>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light px-4 py-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light px-4 py-3" to="/agents">Agents</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light px-4 py-3" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light px-4 py-3" to="/properties">Properties</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light px-4 py-3" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
