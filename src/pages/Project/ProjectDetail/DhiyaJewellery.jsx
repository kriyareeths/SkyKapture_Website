import React, { useState, useEffect } from "react";
import "../ProjectDetail/css/ProjectDetailPage.css";

import imgMainHero from "../../../../src/assets/Diya Bridal Rental Jewellery (1).webp";
import imgKitchenView from "../../../../src/assets/Diya Bridal Rental Jewellery (2).webp";
import imgExteriorVilla from "../../../../src/assets/Diya Bridal Rental Jewellery (3).webp";
import imgWarmNightView from "../../../../src/assets/Diya Bridal Rental Jewellery (4).webp";
import slider1 from "../../../../src/assets/Diya Bridal Rental Jewellery (5).webp";
import slider2 from "../../../../src/assets/Diya Bridal Rental Jewellery (6).webp";
import slider3 from "../../../../src/assets/Diya Bridal Rental Jewellery (7).webp";

import iconClient from "../../../../src/assets/icon-client.webp";
import iconLocation from "../../../../src/assets/icon-location.webp";
import iconServices from "../../../../src/assets/icon-services.webp";
import iconDuration from "../../../../src/assets/icon-duration.webp";
import iconArea from "../../../../src/assets/icon-area.webp";
import iconFacing from "../../../../src/assets/icon-facing.webp";

import secondimage from "../../../../src/assets/Diya Bridal Rental Jewellery (2).webp";
import firstimage from "../../../../src/assets/Diya Bridal Rental Jewellery (3).webp";
import sixthimage from "../../../../src/assets/skykaptureimage1.webp";
import thirdimage from "../../../../src/assets/Diya Bridal Rental Jewellery (4).webp";
import fourthimage from "../../../../src/assets/Diya Bridal Rental Jewellery (5).webp";
import fifthimage from "../../../../src/assets/Diya Bridal Rental Jewellery (1).webp";

function DhiyaJewellery() {
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
                <span className="sdes jost-font">Diya Jewellery</span>
              </div>
              <div className="meta-inline-item">
                <img src={iconLocation} alt="Location" className="meta-icon" />
                <span className="sdes jost-font">sulur, Coimbatore.</span>
              </div>
            </div>

            <h1 className="project-main-title tit Futura-font">Diya Bridal Rental Jewellery</h1>
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
            <p className="des jost-font">20 Days</p>
          </div>
        </div>
        <div className="metric-box">
          <img src={iconArea} alt="Total Area" className="metric-icon" />
          <div className="metric-info">
            <h4 className="stit Futura-font">Total Area</h4>
            <p className="des text-center jost-font">600 Sq. Ft</p>
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
        <span className="bullet-sq">▪</span> Spatial Planning & Layout Optimisation
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Custom Furniture & Material Selection
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Lighting, Colour & Texture Harmony
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Smart Storage & Functional Integration
      </li>
      <li className="des jost-font">
        <span className="bullet-sq">▪</span> Client-Centred Design at Every Stage
      </li>
    </ul>
  </div>

  <div className="specs-col-right">
    <p className="narrative-p des jost-font">
      We designed this 600 Sq. Ft. jewellery showroom with one goal, make every visitor feel the beauty before they see the product. Blending warm wood finishes with modern minimalism, the space balances display functionality with an inviting retail experience. Every corner is purposeful, every detail considered.
    </p>
    <p className="summary-fields-p sdes jost-font">
      <strong className="des">Services:</strong> Full-suite commercial interior design from layout planning to final installation.
      <br />
      <strong className="des">Duration:</strong> Completed in 20 days with zero compromise on quality or finish.
      <br />
      <strong className="des">Total Area:</strong> 600 Sq. Ft. of thoughtfully designed retail and display space.
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

export default DhiyaJewellery;