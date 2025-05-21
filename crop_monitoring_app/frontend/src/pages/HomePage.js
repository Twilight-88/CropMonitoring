import React from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>

      {/* Hero Section */}
      <section
        className="hero-section text-white text-center"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 0"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Revolutionizing Agriculture with AI Vision</h1>
          <p className="lead mb-5">
            Detect crop diseases early, monitor plant health, and maximize your yields with our advanced computer vision platform.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/login" className="btn btn-primary btn-lg px-4">Get Started</Link>
            <Link to="/about" className="btn btn-outline-light btn-lg px-4">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Key Features</h2>
            <p className="lead text-muted">Empowering farmers with intelligent crop monitoring solutions</p>
          </div>

          <div className="row g-4">
            {[
              { icon: "🔍", title: "Disease Detection", text: "Early identification of plant diseases using advanced image recognition algorithms to prevent crop losses." },
              { icon: "📈", title: "Growth Tracking", text: "Monitor plant development over time with automated growth analysis and health indicators." },
              { icon: "🌱", title: "Nutrient Analysis", text: "Detect nutrient deficiencies before they impact yield with our visual analysis tools." },
              { icon: "🛰️", title: "Aerial Monitoring", text: "Drone-integrated scanning for large-scale field analysis and problem area identification." },
              { icon: "⏰", title: "Real-time Alerts", text: "Instant notifications when potential issues are detected in your fields." },
              { icon: "📊", title: "Data Analytics", text: "Comprehensive reports and predictive analytics for informed decision making." },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card feature-card p-4 h-100 text-center">
                  <div className="feature-icon fs-1 mb-3">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">How AgriVision Works</h2>
              {[
                { step: 1, title: "Capture Images", desc: "Upload photos from your smartphone or connect drone/satellite imagery." },
                { step: 2, title: "AI Analysis", desc: "Our computer vision algorithms scan for diseases, pests, and growth patterns." },
                { step: 3, title: "Actionable Insights", desc: "Receive detailed reports with identified issues and recommended actions." }
              ].map((item, index) => (
                <div className="d-flex mb-4" key={index}>
                  <div className="me-4">
                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px" }}>{item.step}</div>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Drone monitoring crops"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="lead mb-5">Join thousands of farmers who are already increasing their yields with AgriVision.</p>
          <Link to="/login" className="btn btn-primary btn-lg px-5">Start Your Free Trial</Link>
        </div>
      </section>


    </>
  );
};

export default HomePage;
