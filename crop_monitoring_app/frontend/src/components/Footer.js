import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2023 AgriVision. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-decoration-none me-3">
                Terms of Service
              </a>
              <a href="#" className="text-decoration-none">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
