import React from 'react';

const Contact = () => {
  return (
    <section className="container-fluid contact-section" id="contacts">
      <div className="container">
        <div className="section-top pb-4 text-center">
          <span className="section-sub-heading text-uppercase">Contact us</span>
          <h2 className="section-heading fs-1">Get in Touch</h2>
        </div>
        <div className="row">
          {/* Form Side */}
          <div className="col-lg-8 mb-4">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mb-3">
                <input type="text" className="form-control" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" id="message" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary contact-button">Submit</button>
            </form>
          </div>

          {/* Address Side */}
          <div className="col-lg-3 offset-lg-1 contact-info">
            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                <i class="fi fi-ts-land-location fs-1 me-3"></i>
              </div>
              <div className="contact-details">
                <span className="detail-heading fw-semibold fs-5">Address :</span>
                <p className="detail-desc mb-0">123 Real Estate Blvd, City, Country</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                <i className="fi fi-ts-envelopes me-3 fs-1"></i>
              </div>
              <div className="contact-details">
                <span className="detail-heading fw-semibold fs-5">Email :</span>
                <p className="detail-desc mb-0">info@realestate.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                <i className="fi fi-ts-phone-call me-3 fs-1" ></i>
              </div>
              <div className="contact-details">
                <span className="detail-heading fw-semibold fs-5">Phone :</span>
                <p className="detail-desc mb-0">+123 456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
