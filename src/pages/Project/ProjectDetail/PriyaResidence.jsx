import React, { useState, useEffect } from "react";
import "../ProjectDetail/css/ProjectDetailPage.css";

import imgMainHero from "../../../../src/assets/MRS.PRIYA RESIDENCE (7).webp";
import imgKitchenView from "../../../../src/assets/MRS.PRIYA RESIDENCE (1).webp";
import imgExteriorVilla from "../../../../src/assets/MRS.PRIYA RESIDENCE (2).webp";
import imgWarmNightView from "../../../../src/assets/MRS.PRIYA RESIDENCE (3).webp";
import slider1 from "../../../../src/assets/MRS.PRIYA RESIDENCE (4).webp";
import slider2 from "../../../../src/assets/MRS.PRIYA RESIDENCE (5).webp";
import slider3 from "../../../../src/assets/MRS.PRIYA RESIDENCE (6).webp";
import slider4 from "../../../../src/assets/MRS.PRIYA RESIDENCE (8).webp";
import slider5 from "../../../../src/assets/MRS.PRIYA RESIDENCE (9).webp";
import slider6 from "../../../../src/assets/MRS.PRIYA RESIDENCE (10).webp";
import slider7 from "../../../../src/assets/MRS.PRIYA RESIDENCE (11).webp";


import iconClient from "../../../../src/assets/icon-client.webp";
import iconLocation from "../../../../src/assets/icon-location.webp";
import iconServices from "../../../../src/assets/icon-services.webp";
import iconDuration from "../../../../src/assets/icon-duration.webp";
import iconArea from "../../../../src/assets/icon-area.webp";
import iconFacing from "../../../../src/assets/icon-facing.webp";

import secondimage from "../../../../src/assets/MRS.PRIYA RESIDENCE (4).webp";
import firstimage from "../../../../src/assets/MRS.PRIYA RESIDENCE (11).webp";
import sixthimage from "../../../../src/assets/skykaptureimage1.webp";
import thirdimage from "../../../../src/assets/MRS.PRIYA RESIDENCE (9).webp";
import fourthimage from "../../../../src/assets/MRS.PRIYA RESIDENCE (3).webp";
import fifthimage from "../../../../src/assets/MRS.PRIYA RESIDENCE (7).webp";

function PriyaResidence() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sliderImages = [
    imgMainHero,
    imgKitchenView,
    imgExteriorVilla,
    imgWarmNightView,
    slider1,
    slider2,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7
  ];

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isAnimating, setIsAnimating] = useState(false);

  // Fast clicking-a thadukka oru lock
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 1200); // 1.2s match with CSS transition
      return () => clearTimeout(timer);
    }
  }, [isAnimating, currentIndex]);

  const handleNextSlide = () => {
    if (isAnimating) return; 
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="project-detail-container">
      <header className="project-detail-header">
        <div className="header-meta-left">
          <div className="solutions-tag">
            <span className="accent-square"></span>
            <p className="stit Futura-font ">
              End-to-End Solutions for
              <br />
              Modern Spaces
            </p>
          </div>

          <div className="project-title-wrapper">
            <span className="featured-pill sdes Futura-font">Featured Project</span>

            <div className="client-loc-row">
              <div className="meta-inline-item">
                <img src={iconClient} alt="Client" className="meta-icon" />
                <span className="sdes jost-font">Mrs.Priya</span>
              </div>
              <div className="meta-inline-item">
                <img src={iconLocation} alt="Location" className="meta-icon" />
                <span className="sdes jost-font">Nehru Nagar, Coimbatore.</span>
              </div>
            </div>

            <h1 className="project-main-title tit Futura-font">Mrs.Priya Residence</h1>
            <p className="project-hero-desc sdes jost-font">
              A harmonious blend of warm wood textures and modern minimalism. We designed this living space with a custom entertainment unit and smart storage, creating a clean, inviting aesthetic that perfectly suits the family's daily lifestyle.
            </p>
            <span className="brand-subtext des Futura-font">SKY KAPTURE INTERIORS</span>
          </div>
        </div>

        <div className="header-meta-right">
          <div className="studio-top-intro-para">
            <p className="sdes Futura-font">
              From structural form to the final interior detail, we craft
              contemporary environments designed for clarity, comfort, and
              timeless precision.
            </p>
          </div>
          <div className="header-preview-right">
            <img
              src={firstimage}
              alt="Horizon Glass Villa Cover"
              className="side-preview-img"
            />
          </div>
        </div>
      </header>

      <section className="property-metrics-bar">
        <div className="metric-box">
          <img src={iconServices} alt="Services" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit Futura-font">Services</h4>
            <p className="des jost-font">Interior</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconDuration} alt="Duration" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit Futura-font">Duration</h4>
            <p className="des jost-font">60 Days</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconArea} alt="Total Area" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit Futura-font">Total Area</h4>
            <p className="des text-center jost-font">2,000 Sq. Ft</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconFacing} alt="Site Facing" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit Futura-font">Site Facing</h4>
            <p className="des jost-font">East</p>
          </div>
        </div>
      </section>

      <div className="mesh-panel-box1">
        <img src={secondimage} alt="Mesh Panel Main Hero" />
      </div>

      <section className="detail-approach-specs">
  <div className="specs-col-left">
    <div className="approach-header-spine">
      <div>
        <h3 className="tit">Our Approach</h3>
      </div>
    </div>
    <ul className="approach-bullet-points">
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Spatial Planning & Layout Optimization
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Bespoke Furniture & Material Curation
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Lighting, Color & Texture Harmonization
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Turnkey Execution & Project Management
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Human-Centric Comfort Solutions
      </li>
    </ul>
  </div>

  <div className="specs-col-right">
    <p className="narrative-p des jost-font">
      We are currently crafting a refined 2,000 Sq. Ft. residence for Mrs. Priya at Nehru Nagar, Coimbatore, blending architectural precision with warm, personal aesthetics. This project reflects our commitment to designing homes that feel as thoughtful as they look. From spatial planning to final finishes, every detail is curated to create a living space that is distinctly hers.
    </p>
    <p className="summary-fields-p sdes jost-font">
      <strong className="des">Services:</strong> We are delivering a complete turnkey interior solution from concept and 3D design to execution and final handover.
      <br />
      <strong className="des">Duration:</strong> This project is progressing steadily within a focused 60-day execution timeline.
      <br />
      <strong className="des">Total Area:</strong> The residence spans 2,000 Sq. Ft. of carefully planned, purposefully designed living space.
    </p>
  </div>
</section>

      <section className="gallery-split-mesh-grid">
        <div className="mesh-top-full">
          <img src={thirdimage} alt="Static Mesh Top View" />
        </div>

        <div className="mesh-bottom-split">
          <div className="mesh-panel-box">
            <img src={fourthimage} alt="Static Mesh Left View" />
          </div>
          <div className="mesh-panel-box">
            <img src={fifthimage} alt="Static Mesh Right View" />
          </div>
        </div>
      </section>

      <section className="immersive-slider-wrapper">
        <div 
          className="main-slider-viewport" 
          style={{ overflow: "hidden", position: "relative" }}
        >
          {/* Images ellam mela mela stack aagi, opacity based fade aagum */}
          {sliderImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Horizon Glass Villa Layout ${index + 1}`}
              className="slider-active-image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: currentIndex === index ? 1 : 0, // Active image mattum theriyum
                visibility: currentIndex === index ? "visible" : "hidden",
                transition: "opacity 1.2s ease-in-out, visibility 1.2s ease-in-out", // Pure Fade reveal
                zIndex: currentIndex === index ? 2 : 1
              }}
            />
          ))}
          
          <button className="slider-nav-btn prev" onClick={handlePrevSlide} style={{ position: "absolute", zIndex: 10 }}>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M35 12H5M5 12L14 4M5 12L14 20" 
                stroke="#000000" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="slider-nav-btn next" onClick={handleNextSlide} style={{ position: "absolute", zIndex: 10 }}>
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 12H35M35 12L26 4M35 12L26 20" 
                stroke="#000000" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default PriyaResidence;