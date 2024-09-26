import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer class="footer text-white pt-5 pb-1">
            <div class="container pad-top">
                <div class="row">
                    <div class="col-md-6 col-lg mb-4">
                        <Link className="navbar-brand" to="/">
                            <div className='logo pb-4'>
                                <img src="/ab-reality-logo.png" alt="AB Reality" className='logo-img' />
                            </div>
                        </Link>
                        <p class="opacity-75">Browse through the best properties in Pune. Whether you're looking to buy, sell, or rent, we've got you covered!</p>
                    </div>
                    <div class="col-md-6 col-lg mb-4">
                        <h4 class="fw-semibold mb-4">Navigation</h4>
                        <ul class="list-unstyled w-100">
                            <li><a href="/" className="text-white d-block py-2 opacity-50">Home</a></li>
                            <li><a href="#features" className="text-white d-block py-2 opacity-50">Features</a></li>
                            <li><a href="#properties" className="text-white d-block py-2 opacity-50">Properties</a></li>
                            <li><a href="#services" className="text-white d-block py-2 opacity-50">Services</a></li>
                            <li><a href="#about" className="text-white d-block py-2 opacity-50">About</a></li>
                            <li><a href="#agents" className="text-white d-block py-2 opacity-50">Agents</a></li>
                            <li><a href="#contact" className="text-white d-block py-2 opacity-50">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg mb-4">
                        <h4 class="fw-semibold mb-4">Useful Link</h4>
                        <ul class="list-unstyled w-100">
                            <li><a href="/" class="text-white d-block py-2 opacity-50">Link 1</a></li>
                            <li><a href="/" class="text-white d-block py-2 opacity-50">Link 2</a></li>
                            <li><a href="/" class="text-white d-block py-2 opacity-50">Link 3</a></li>
                            <li><a href="/" class="text-white d-block py-2 opacity-50">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 col-lg mb-4">
                        <h4 class="fw-semibold mb-4">Have a Question?</h4>
                        <div class="d-flex flex-column">
                            <div class="d-flex">
                                <div class="col-2"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="col-10">
                                    <p class="text-white opacity-75">203 Fake St. Mountain View, San Francisco, California, USA</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="col-2"><i class="fa-solid fa-phone text-white"></i></div>
                                <div class="col-10">
                                    <p class="text-white">+2 392 3929 210</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="col-2"><i class="fa-solid fa-envelope"></i></div>
                                <div class="col-10">
                                    <p class="text-white">info@yourdomain.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="container-fluid mx-auto ft-bottom">
                    <p class="text-center fw-light text-white opacity-75">Copyright ©2024 All rights reserved | <a href="/" class="text-decoration-none text-white opacity-75">AB Reality & Rental Hub</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer