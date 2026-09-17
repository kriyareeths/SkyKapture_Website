import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

// Swiper CSS imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Custom CSS
import './css/VoicesOfClients.css';

// Your assets (Make sure these paths match your project structure)
import slide1 from '../../assets/MR PARAMAN RESIDENCE (5).webp';
import slide2 from '../../assets/Mr Vinoth Residence (1).webp';
import slide3 from '../../assets/bpcl (8).webp';
import slide4 from '../../assets/MRS.PRIYA RESIDENCE (8).webp';

import bpcl from '../../assets/vasu-icon.webp';
import vinoth from '../../assets/studioteam1.webp';
import paraman from '../../assets/studioteam3.webp';
import priya from '../../assets/studioteam2.webp';

export default function VoicesOfClients() {
  
  // Base 3 slides
  const baseSlides = [
    {
      id: 2,
      image: slide2,
      title: 'Mr Vinoth Residence',
      year: '2026', 
      tags: ['Residential', '3D Design'],
      hasReview: true,
      review: {
        headline: 'Quiet Architectural Confidence',
        content: "When the work was done, we couldn't believe it was our house! Dhivyadharrsini’s Sky Kapture team designed our life, not just rooms.",
        authorName: 'Vinoth-Kurumbampalyam',
        authorAvatar: vinoth,
      },
    },
    {
      id: 1,
      image: slide1,
      title: 'Mr Paraman Residence',
      year: '2026',
      tags: ['Modular', 'Kitchen'],
      hasReview: true,
      review: {
        headline: 'Natural Minimalism Personified',
        content: "Redesigning my kitchen with Sky Kapture was my best home decision. The perfect lighting and smart storage actually make me look forward to cooking!",
        authorName: 'Paraman-Saravanampatti',
        authorAvatar: paraman,
      },
    },
    {
      id: 3,
      image: slide3,
      title: 'Bharat Petroleum Corporation Limited',
      year: '2026',
      tags: ['Commercial ', 'Interior'],
      hasReview: true,
      review: {
        headline: 'Seamless Turnkey Solutions',
        content: "Sky Kapture took the stress out of our new flat. Their 3D design to final installation was seamless, on budget, and exceeded our expectations!",
        authorName: 'BPCL-Coimbatore',
        authorAvatar: bpcl,
      },
    },
     {
      id: 4,
      image: slide4,
      title: 'Mrs Priya Residence',
      year: '2026',
      tags: ['Personalized', 'Residential'],
      hasReview: true,
      review: {
        headline: 'Light Modern Living',
        content: "Sky Kapture took the stress out of our new flat. Their 3D design to final installation was seamless, on budget, and exceeded our expectations!",
        authorName: 'Priya-Nehru Nagar',
        authorAvatar: priya,
      },
    },
  ];

  // 1. Slides-ah duplicate panrom (3 irunthu 6 aaguthu) for smooth loop
  const slides = [...baseSlides, ...baseSlides.map(slide => ({ ...slide, id: slide.id + '_dup' }))];

  return (
    <section className="voc-section">
      <header className="voc-header">
        <div className="voc-header-left">
          <div className="voc-badge">
            <span className="voc-orange-square"></span>
            <span className="voc-badge-text stit">Experience-Led</span>
          </div>
        </div>

        <div className="voc-header-center">
          <h2 className="voc-title tit">Voices of Our Clients</h2>
        </div>

        <div className="voc-header-right">
          <p className="voc-subtitle des">
            A visual library of interiors brought to life from blueprint to beauty.
          </p>
          <div className="voc-nav-buttons">
            <button className="voc-arrow-btn voc-prev">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="voc-arrow-btn voc-next">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

     <div className="voc-slider-container">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          
          // --- SMOOTHNESS FIXES START ---
          speed={1000} // Oru slide maarum neram (1000ms = 1 second for silky smooth transition)
          loop={true} 
          autoplay={{
            delay: 3000, // 3 seconds-kku oru murai maarum
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
          }}
          // --- SMOOTHNESS FIXES END ---
          
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          navigation={{
            prevEl: '.voc-prev',
            nextEl: '.voc-next',
          }}
          className="voc-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="voc-slide">
              {({ isActive }) => (
                <div className={`voc-card ${isActive ? 'is-active' : ''}`}>
                  <div className="voc-image-wrapper">
                    <img src={slide.image || "https://via.placeholder.com/800x500"} alt={slide.title} className="voc-main-img" />
                    
                    {slide.hasReview && (
                      <div className="voc-glass-overlay">
                        <h3 className="voc-glass-title des">{slide.review.headline}</h3>
                        <p className="voc-glass-text sdes">{slide.review.content}</p>
                        <div className="voc-author-block">
                          <img 
                            src={slide.review.authorAvatar || "https://via.placeholder.com/40"} 
                            alt={slide.review.authorName} 
                            className="voc-avatar" 
                          />
                          <div className="voc-author-info">
                            <span className="voc-author-name des">{slide.review.authorName}</span>
                            <span className="voc-author-role sdes">{slide.review.authorRole}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="voc-card-meta">
                    <div className="voc-meta-left">
                      <h4 className="voc-item-title des">{slide.title}</h4>
                      <span className="voc-item-year sdes">{slide.year}</span>
                    </div>
                    <div className="voc-meta-right">
                      {slide.tags.map((tag, index) => (
                        <span key={`${slide.id}-${index}`} className="voc-tag sdes">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}