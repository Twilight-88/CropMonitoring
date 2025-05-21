// src/pages/AboutPage.js

import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero" style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Story in Agri-Tech</h1>
          <p className="lead">Pioneering computer vision solutions for sustainable agriculture</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
              <div className="card shadow-sm p-4 mb-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                <h4 className="text-success">Mission</h4>
                <p>To empower farmers with AI-driven insights that prevent crop losses, optimize yields, and promote sustainable agricultural practices through accessible technology.</p>
              </div>
              <div className="card shadow-sm p-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                <h4 className="text-success">Vision</h4>
                <p>A world where no farmer loses crops to preventable diseases, and where technology bridges the gap between traditional farming and modern precision agriculture.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="img-fluid rounded" alt="Farmer using technology" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">The Problem We're Solving</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                <h4 className="text-success">$220B Lost Annually</h4>
                <p>Global crop losses from pests and diseases amount to over $220 billion each year, with smallholder farmers disproportionately affected.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                <h4 className="text-success">Late Detection</h4>
                <p>By the time visible symptoms appear, crop diseases have often already caused irreversible damage, reducing yields by 30-50%.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                <h4 className="text-success">Expertise Gap</h4>
                <p>Most farmers lack access to plant pathologists, with only 1 agricultural expert per 2,000 farmers in developing regions.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 bg-white rounded shadow-sm">
            <h4 className="text-success">Our Solution</h4>
            <p>AgriVision's computer vision platform puts disease detection expertise in every farmer's pocket. Our AI models trained on over 5 million crop images can identify 98% of common diseases 2-3 weeks before the human eye can detect them, giving farmers critical time to intervene. By combining drone imagery with smartphone accessibility, we're making precision agriculture affordable at scale.</p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Agri-Tech Leadership</h2>
          <div className="row g-4 justify-content-center">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Founder & CEO",
                desc: "Plant pathologist with 15 years at USDA, pioneered early disease detection algorithms.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Raj Patel",
                role: "CTO",
                desc: "Computer vision expert, former lead at Google AI Agriculture projects.",
                img: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Maria Gonzalez",
                role: "Head of Field Operations",
                desc: "3rd generation farmer with agronomy degree, bridges tech and farming practices.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                name: "Kwame Nkrumah",
                role: "Director of Emerging Markets",
                desc: "Led agricultural tech deployment across 14 African nations.",
                img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((member, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="card h-100 text-center p-4" style={{ borderLeft: "5px solid #2e7d32" }}>
                  <div className="team-member mx-auto mb-3">
                    <img src={member.img} className="rounded-circle" alt={member.name} style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                      border: "5px solid #81c784"
                    }} />
                  </div>
                  <h4>{member.name}</h4>
                  <p className="text-success">{member.role}</p>
                  <p>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h3 className="fw-bold mb-4">Our Partners</h3>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
              {["FAO", "USDA", "Gates+Foundation", "World+Bank"].map((partner, i) => (
                <img key={i} src={`https://via.placeholder.com/150x80?text=${partner}`} alt={partner} style={{ filter: "grayscale(100%) opacity(70%)" }} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
