import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_y6jq7so',         // Replace with your EmailJS service ID
      'template_smllszg',        // Replace with your EmailJS template ID
      formRef.current,
      'LOp0YEN0qrrGBrzt6'          // Replace with your EmailJS public key
    ).then(
      () => {
        setSubmitted(true);
        setError(null);
        formRef.current.reset();
      },
      (err) => {
        setError('Message failed to send. Please try again.');
        console.error(err);
      }
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero py-5 bg-light"
            style={{
            background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '100px 0',
            textAlign: 'center',
        }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-4">We're Here to Help</h1>
          <p className="lead mb-5">
            Have questions about our platform or need agricultural advice? Reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Card 1 */}
            <div className="col-md-4">
              <div className="card contact-card h-100 text-center p-4">
                <div className="contact-icon mb-3">
                  <i className="fas fa-envelope fa-2x text-success"></i>
                </div>
                <h3>Email Us</h3>
                <p>For general inquiries and support</p>
                <a href="mailto:delight.cs50@gmail.com" className="btn btn-outline-success">
                  support@agrivision.com
                </a>
              </div>
            </div>
            {/*support@agrivision.com*/}
            {/* +1 (800) 555-1234 */}
            {/* Contact Card 2 */}
            <div className="col-md-4">
              <div className="card contact-card h-100 text-center p-4">
                <div className="contact-icon mb-3">
                  <i className="fas fa-phone-alt fa-2x text-success"></i>
                </div>
                <h3>Call Us</h3>
                <p>Speak directly with our support team</p>
                <a href="tel:+91xxxxxxxxxx" className="btn btn-outline-success">
                  +91 xxx-xxx-xxxx
                </a>
                <small className="text-muted d-block mt-2">Mon-Fri, 9am-5pm EST</small>
              </div>
            </div>

            {/* Contact Card 3 */}
            <div className="col-md-4">
              <div className="card contact-card h-100 text-center p-4">
                <div className="contact-icon mb-3">
                  <i className="fas fa-map-marker-alt fa-2x text-success"></i>
                </div>
                <h3>Visit Us</h3>
                <p>Our headquarters location</p>
                <address>
                  123 AgriTech Way<br />
                  Farmville, xxxxxx
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Contact Form and Map Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h1 className="text-center mb-5 fw-bold">We're Here to Help</h1>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h2 id="sendMessageSection" className="mb-4">Send Us a Message</h2>

                  {submitted && <div className="alert alert-success">Message sent successfully!</div>}
                  {error && <div className="alert alert-danger">{error}</div>}

                  <form ref={formRef} onSubmit={sendEmail}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="first_name" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="last_name" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select className="form-select" name="subject" required>
                          <option value="">Choose...</option>
                          <option>General Inquiry</option>
                          <option>Technical Support</option>
                          <option>Sales Questions</option>
                          <option>Partnership Opportunities</option>
                          <option>Feedback</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" rows="5" required></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="subscribe" />
                          <label className="form-check-label">Subscribe to our newsletter</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-success btn-lg">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body p-0">
                  <div style={{ height: '300px', overflow: 'hidden' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18..."
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                      title="AgriVision HQ Map"
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h4>AgriVision Headquarters</h4>
                    <address>
                      <strong>AgriVision Technologies</strong><br />
                      123 AgriTech Way<br />
                      Farmville, xxxxxx<br />
                      India
                    </address>
                    <p>
                      <i className="fas fa-clock text-success me-2"></i>
                      <strong>Hours:</strong> Mon-Fri, 9:00AM - 5:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                {/* FAQ Item 1 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How quickly can I expect a response to my inquiry?
                    </button>
                  </h3>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Our team strives to respond to all inquiries within 24 hours during business days. For technical support issues, we
                      typically respond within 4-6 hours during our support hours of 9am-5pm EST.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you offer on-site training or consultations?
                    </button>
                  </h3>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we offer both on-site and virtual training sessions for farms and agricultural businesses. Our agronomy experts can
                      provide customized training on using our platform and general best practices for crop health monitoring. Please contact
                      our sales team for more information.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      What information should I include when reporting a technical issue?
                    </button>
                  </h3>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      When reporting technical issues, please include: (1) The device/browser you're using, (2) Steps to reproduce the issue, (3)
                      Screenshots if possible, (4) Any error messages you received, and (5) Your account email. This information helps us resolve
                      your issue more quickly.
                    </div>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Do you have documentation available for API integration?
                    </button>
                  </h3>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we provide comprehensive API documentation for developers looking to integrate AgriVision with their existing farm
                      management systems. Please contact our technical support team with your specific requirements, and we'll provide the
                      appropriate documentation and developer resources.
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <p>
                  Didn't find your answer?{' '}
                  <a href="#sendMessageSection" className="text-success">
                    Send us your question
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
