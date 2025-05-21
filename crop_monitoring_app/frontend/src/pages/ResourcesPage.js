import React from 'react';
import { FaBookOpen, FaSearch, FaArrowRight } from 'react-icons/fa';
import '../assets/css/ResourcesPage.css';

const ResourcesPage = () => {
  // Sample data for resources
  const featuredPost = {
    title: "How Computer Vision is Revolutionizing Crop Monitoring",
    excerpt: "Explore the latest advancements in AI-powered agriculture and how farmers worldwide are increasing yields by 20-30% using these technologies.",
    author: "Dr. Sarah Chen",
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    authorImage: "https://randomuser.me/api/portraits/women/43.jpg"
  };

  const resources = [
    {
      id: 1,
      title: "Identifying and Treating Early Blight in Tomatoes",
      excerpt: "Learn to recognize the first signs of this common fungal disease and effective organic treatment options.",
      category: "Crop Diseases",
      date: "June 10, 2023",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "success"
    },
    {
      id: 2,
      title: "How to Interpret AgriVision Detection Results",
      excerpt: "A step-by-step guide to understanding confidence scores and implementing recommended actions.",
      category: "AI in Agriculture",
      date: "June 5, 2023",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "info"
    },
    {
      id: 3,
      title: "Optimal Irrigation Practices for Corn",
      excerpt: "Data-driven recommendations for water management to maximize yield while conserving resources.",
      category: "Farming Tips",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "warning"
    },
    {
      id: 4,
      title: "Integrating Drone Imagery with AgriVision",
      excerpt: "Tutorial on setting up automated drone scans and syncing data with your crop monitoring dashboard.",
      category: "AI in Agriculture",
      date: "May 20, 2023",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "info"
    },
    {
      id: 5,
      title: "Preventing Rust Diseases in Wheat",
      excerpt: "Early detection strategies and resistant varieties to protect your wheat crops this season.",
      category: "Crop Diseases",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "success"
    },
    {
      id: 6,
      title: "Getting Started with AgriVision Mobile App",
      excerpt: "Complete walkthrough of all features and settings for on-the-go crop monitoring.",
      category: "Platform Guides",
      date: "May 10, 2023",
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      badgeColor: "primary"
    }
  ];

  const popularTags = [
    "Tomatoes", "Disease Prevention", "Computer Vision", "Irrigation", 
    "Corn", "Wheat", "Tutorial", "Nutrient Deficiency", "Pest Control", "Data Analysis"
  ];

  const popularArticles = [
    { title: "10 Signs Your Crops Need Attention", views: "1,245", isNew: true },
    { title: "AI vs. Traditional Scouting", views: "892" },
    { title: "Mobile App Feature Guide", views: "756" },
    { title: "Organic Treatment Options", views: "689" },
    { title: "Interpreting Health Scores", views: "542" }
  ];

  return (
    <div className="resources-page">
      <div className="container py-5">
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="page-title">
              <FaBookOpen className="me-2" />
              Agricultural Knowledge Hub
            </h1>
            <p className="lead text-muted">
              Expert insights, practical guides, and the latest advancements in smart farming
            </p>
          </div>
        </div>
        
        {/* Featured Post */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="featured-post bg-white">
              <div className="row g-0">
                <div className="col-lg-6">
                  <img 
                    src={featuredPost.image} 
                    className="featured-post-img w-100" 
                    alt={featuredPost.title} 
                  />
                </div>
                <div className="col-lg-6">
                  <div className="p-4 p-md-5">
                    <div className="badge bg-success mb-3">FEATURED</div>
                    <h2>{featuredPost.title}</h2>
                    <p className="text-muted">{featuredPost.excerpt}</p>
                    <div className="d-flex align-items-center mt-4">
                      <img 
                        src={featuredPost.authorImage} 
                        className="rounded-circle me-2" 
                        width="40" 
                        alt={featuredPost.author} 
                      />
                      <div>
                        <small className="d-block">{featuredPost.author}</small>
                        <small className="text-muted">
                          {featuredPost.date} · {featuredPost.readTime}
                        </small>
                      </div>
                    </div>
                    <button className="btn btn-success mt-3">
                      Read Full Article <FaArrowRight className="ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          {/* Main Content Area */}
          <div className="col-lg-8 mb-5">
            {/* Category Navigation */}
            <ul className="nav nav-pills mb-4">
              <li className="nav-item">
                <button className="nav-link active">All Topics</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Crop Diseases</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Farming Tips</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">AI in Agriculture</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Platform Guides</button>
              </li>
            </ul>
            
            {/* Articles List */}
            <div className="row">
              {resources.map(resource => (
                <div key={resource.id} className="col-md-6 mb-4">
                  <div className="card resource-card h-100">
                    <div className="position-relative">
                      <img 
                        src={resource.image} 
                        className="card-img-top article-image" 
                        alt={resource.title} 
                      />
                      <span className={`badge bg-${resource.badgeColor} category-badge`}>
                        {resource.category}
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{resource.title}</h5>
                      <p className="card-text text-muted">{resource.excerpt}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{resource.date}</small>
                        <button className="btn btn-sm btn-outline-success">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <button className="page-link" tabIndex="-1">Previous</button>
                </li>
                <li className="page-item active">
                  <button className="page-link">1</button>
                </li>
                <li className="page-item">
                  <button className="page-link">2</button>
                </li>
                <li className="page-item">
                  <button className="page-link">3</button>
                </li>
                <li className="page-item">
                  <button className="page-link">Next</button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Search Box */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Search Resources</h5>
                <div className="search-box">
                  <FaSearch className="search-icon" />
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search articles..." 
                  />
                </div>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Popular Tags</h5>
                <div className="tags-container">
                  {popularTags.map((tag, index) => (
                    <button key={index} className="tag">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="newsletter-box mb-4">
              <h5>Subscribe to Our Newsletter</h5>
              <p className="newsletter-text">
                Get the latest agricultural insights and platform updates delivered to your inbox.
              </p>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address" 
                />
              </div>
              <button className="btn btn-light w-100">
                Subscribe
              </button>
            </div>
            
            {/* Popular Articles */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Most Popular</h5>
                <ul className="list-group list-group-flush">
                  {popularArticles.map((article, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{article.title}</div>
                        <small className="text-muted">{article.views} views</small>
                      </div>
                      {article.isNew && (
                        <span className="badge bg-success rounded-pill">New</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Video Tutorial */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Featured Video</h5>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe 
                    src="https://www.youtube.com/embed/VIDEO_ID" 
                    title="Featured video" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h6>How to Capture Perfect Crop Images for Analysis</h6>
                <small className="text-muted">5 min tutorial</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;