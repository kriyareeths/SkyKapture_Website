import React, { useState, useEffect } from 'react';
// Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import './css/ExperienceSection.css'; // உங்களோட CSS path

import sreedhaksa from '../../assets/Sree Daksha thumbnails.webp';
import santhoshresidence from '../../assets/Santhosh residence thumbnails.webp';
import paramanresidence from '../../assets/Paraman Residence thumbnails.webp';
import BPCL from '../../assets/BPCL thumbnails.webp';
import dhiyajewellery from '../../assets/dhiyajewellery.webp';
import santhosh2img from '../../assets/Santhosh residence thumb.webp';
import vinothimg from '../../assets/Vinoth residence thumb.webp';

import santhosh from '../../assets/santhoshSundakamuthur.mp4';
import paraman from '../../assets/paramanresidency.mp4';
import sridhaksha from '../../assets/Sri Daksha.mp4';
import bpcl from '../../assets/Bpcl.mp4';
import dhiyajewellerys from '../../assets/dhiyajewellery.mp4';
import santhosh2 from '../../assets/santhoshresidency.mp4';
import vinoth from '../../assets/vinothresidency.mp4';

// Desktop-ல் Carousel சுத்துவதற்காக (Loop) டேட்டாவை அதிகப்படுத்தியுள்ளோம்
const projects = [
  {
    id: 1,
    title: 'Mr Santhosh Residence',
    location: 'Coimbatore',
    img: santhoshresidence,
    video: santhosh,
  },
  {
    id: 2,
    title: 'Mr Paraman Residence',
    location: 'Coimbatore',
    img: paramanresidence,
    video: paraman,
  },
  {
    id: 3,
    title: 'Sri Daksha Residence',
    location: 'Coimbatore',
    img: sreedhaksa,
    video: sridhaksha,
  },
  {
    id: 4,
    title: 'BPCL',
    location: 'Coimbatore',
    img: BPCL,
    video: bpcl,
  },
  {
    id: 5,
    title: 'Diya Jewellery',
    location: 'Coimbatore',
    img: dhiyajewellery,
    video: dhiyajewellerys,
  },
  {
    id: 6,
    title: 'Vinoth Residence',
    location: 'Coimbatore',
    img: vinothimg,
    video: vinoth,
  },
  {
    id: 7,
    title: 'Santhosh Residence',
    location: 'Coimbatore',
    img: santhosh2img,
    video: santhosh2,
  },
  // --- Duplicated Data for Infinite Scroll on Big Screens ---
  {
    id: 8,
    title: 'Mr Santhosh Residence',
    location: 'Coimbatore',
    img: santhoshresidence,
    video: santhosh,
  },
  {
    id: 9,
    title: 'Mr Paraman Residence',
    location: 'Coimbatore',
    img: paramanresidence,
    video: paraman,
  },
  {
    id: 10,
    title: 'Sri Daksha Residence',
    location: 'Coimbatore',
    img: sreedhaksa,
    video: sridhaksha,
  },
  {
    id: 11,
    title: 'BPCL',
    location: 'Coimbatore',
    img: BPCL,
    video: bpcl,
  },
  {
    id: 12,
    title: 'Diya Jewellery',
    location: 'Coimbatore',
    img: dhiyajewellery,
    video: dhiyajewellerys,
  },
    {
    id: 13,
    title: 'Vinoth Residence',
    location: 'Coimbatore',
    img: vinothimg,
    video: vinoth,
  },
  {
    id: 14,
    title: 'Santhosh Residence',
    location: 'Coimbatore',
    img: santhosh2img,
    video: santhosh2,
  },
];

const ExperienceSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoPortrait, setIsVideoPortrait] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null); // ✅ Swiper-ஐ கட்டுப்படுத்த

  // ✅ Video திறக்கும்போது Background Scroll-ஐ நிறுத்தவும் & Slider-ஐ நிறுத்தவும்
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden'; // Vertical Scroll தடை செய்யப்படும்
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.stop(); // Horizontal Slider நிக்கும்
      }
    } else {
      document.body.style.overflow = 'auto'; // Vertical Scroll மீண்டும் வேலை செய்யும்
      if (swiperInstance && swiperInstance.autoplay) {
        swiperInstance.autoplay.start(); // Horizontal Slider மீண்டும் ஓடும்
      }
    }

    return () => {
      document.body.style.overflow = 'auto'; // Component விட்டு வெளியேறினால் ரீசெட் ஆகும்
    };
  }, [selectedVideo, swiperInstance]);

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsVideoPortrait(false); // மூடும் போது ரீசெட்
  };

  const handleVideoLoad = (e) => {
    const { videoWidth, videoHeight } = e.target;
    // உயரம் அகலத்தை விட அதிகமாக இருந்தால் Portrait
    setIsVideoPortrait(videoHeight > videoWidth);
  };

  return (
    <section className="experience-section">
      <div className="exp-header">
        <div className="label stit">
          <span className="orange-box"></span>
          Concept → Reality
        </div>

        <h2 className="title tit">
          Experience-led<br />Design, Perfected.
        </h2>

        <div className="header-content">
          <div className="right-side">
            <p className="sub-text1 des">
              A visual library of interiors brought to life<br />
              from blueprint to beauty.
            </p>

            <Link to="/our-studio">
            <button className="view-portfolio-btn">
              <span className="text des">View Portfolio</span>
              <span className="arrow-box des"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="#1a1a1a"
  strokeWidth="2" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Section Using Swiper */}
      <div className="carousel-container">
        <Swiper
          onSwiper={setSwiperInstance} // ✅ Swiper-ன் instance-ஐ State-ல் சேமிக்க
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          speed={1200} 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, 
            pauseOnMouseEnter: true, 
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="projects-swiper"
        >
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="project-card" style={{ backgroundImage: `url("${p.img}")` }}>
                <div className="video-overlay">
                  <button
                    className="play-button"
                    aria-label={`Play ${p.title} video`}
                    onClick={() => setSelectedVideo(p)}
                  >
                    <span className="play-ring ring-1"></span>
                    <span className="play-ring ring-2"></span>
                    <span className="play-icon">▶</span>
                  </button>
                </div>

                <div className="card-footer">
                  <img src={p.img} alt={p.title} className="footer-thumb" />
                  <div className="footer-text">
                    <h4 className="stit">{p.title}</h4>
                    <p className="sdes">{p.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal" onClick={handleCloseModal}>
          <div 
            className={`video-modal-content ${isVideoPortrait ? 'portrait-layout' : 'landscape-layout'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✅ Cross Symbol (SVG) */}
            <button
              className="video-close"
              onClick={handleCloseModal}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <video
              className="modal-video"
              src={selectedVideo.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              onLoadedMetadata={handleVideoLoad} 
            />

            {/* <div className="modal-caption">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.location}</p>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;