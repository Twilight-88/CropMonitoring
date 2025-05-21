// src/pages/HowItWorkPage.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HowItWorkPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="process-hero text-white text-center"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">How Our AI Detects Crop Health</h1>
          <p className="lead">
            From image capture to actionable insights - see the technology
            behind precision agriculture
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">
            Our Computer Vision Process
          </h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              {[
                {
                  step: 1,
                  title: "Image Capture & Upload",
                  content:
                    "Farmers capture images using smartphones, drones, or field cameras. Our platform accepts various formats (JPEG, PNG) and automatically optimizes images for analysis. Drones can cover up to 100 acres per flight with 0.5cm resolution.",
                  image:
                    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                },
                {
                  step: 2,
                  title: "Pre-processing & Enhancement",
                  content:
                    "Our system automatically corrects for lighting conditions, removes background noise, and enhances key features using advanced image processing algorithms. This ensures consistent analysis regardless of capture conditions.",
                  dualImages: [
                    {
                      src: "https://via.placeholder.com/300x200?text=Raw+Leaf+Image",
                      label: "Original Image",
                    },
                    {
                      src: "https://via.placeholder.com/300x200?text=Processed+Leaf+Image",
                      label: "Enhanced Image",
                    },
                  ],
                },
                {
                  step: 3,
                  title: "AI Analysis & Detection",
                  content:
                    "Our convolutional neural networks (CNNs) analyze the images across 142 disease signatures, comparing against our database of 5.7 million verified crop images. The system evaluates:",
                  list: [
                    "Leaf discoloration patterns",
                    "Lesion morphology",
                    "Canopy density changes",
                    "Early-stage symptom detection",
                  ],
                },
                {
                  step: 4,
                  title: "Results & Recommendations",
                  content:
                    "The system generates a comprehensive report with:",
                  list: [
                    "Identified disease(s) with confidence levels",
                    "Affected area mapping",
                    "Treatment options (organic and conventional)",
                    "Prevention strategies",
                    "Growth stage analysis",
                  ],
                  image:
                    "https://via.placeholder.com/600x300?text=Sample+Dashboard+with+Results",
                },
              ].map((item) => (
                <div key={item.step} className="process-step mb-5" style={{ position: "relative", paddingLeft: 80 }}>
                  <div
                    className="step-number"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 60,
                      height: 60,
                      borderRadius: "50%",
                      backgroundColor: "#2e7d32",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 24,
                      fontWeight: "bold",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    {item.list && (
                      <ul>
                        {item.list.map((li, idx) => (
                          <li key={idx}>{li}</li>
                        ))}
                      </ul>
                    )}
                    {item.image && (
                      <div className="text-center my-4">
                        <img
                          src={item.image}
                          alt="process"
                          className="img-fluid rounded border"
                        />
                      </div>
                    )}
                    {item.dualImages && (
                      <div className="text-center my-4">
                        <div className="row">
                          {item.dualImages.map((img, idx) => (
                            <div key={idx} className="col-md-6">
                              <p className="text-muted">
                                <small>{img.label}</small>
                              </p>
                              <img
                                src={img.src}
                                alt={img.label}
                                className="img-fluid border rounded"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Flow Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Our Analysis Workflow</h2>
          <div className="row g-4">
            {[
              {
                icon: "camera-retro",
                title: "Image Upload",
                desc: "User submits crop images via mobile app, web portal, or automated drone feed",
              },
              {
                icon: "microscope",
                title: "Image Processing",
                desc: "Noise reduction, normalization, and feature enhancement",
              },
              {
                icon: "brain",
                title: "AI Analysis",
                desc: "Deep learning models evaluate 142 disease markers across 87 crop varieties",
              },
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="col-md-3">
                  <div className="card flow-card text-center p-4 h-100">
                    <i
                      className={`fas fa-${step.icon} tech-stack-icon`}
                      style={{ fontSize: "2.5rem", color: "#2e7d32", marginBottom: 15 }}
                    ></i>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="col-md-1 d-flex align-items-center justify-content-center">
                    <div className="flow-arrow text-center">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="row mt-0 g-4">
            <div className="col-md-4"></div>
            <div className="col-md-1 d-flex align-items-center justify-content-center">
              <div className="flow-arrow text-center">
                <i className="fas fa-arrow-down"></i>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="card flow-card text-center p-4 h-100">
                <i
                  className="fas fa-clipboard-check tech-stack-icon"
                  style={{ fontSize: "2.5rem", color: "#2e7d32", marginBottom: 15 }}
                ></i>
                <h4>Actionable Report</h4>
                <p>
                  Detailed diagnosis with treatment recommendations, risk maps,
                  and prevention strategies delivered via web/mobile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorkPage;
