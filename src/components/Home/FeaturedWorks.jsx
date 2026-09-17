import React from 'react';
import './css/FeaturedWorks.css';

import img1 from '../../assets/MR PARAMAN RESIDENCE (2).webp';
import img2 from '../../assets/Mr Vinoth Residence (7).webp';

import Icon from '../../assets/icon-design.webp';
import { Link } from 'react-router-dom';

const FeaturedWorks = () => {
  const works = [
        { id: 1, title: 'Mr.Paraman Residence', cat: 'Residential', loc: 'Saravanampatti,CBE', img: img1 ,link: '/projects/mr-paraman-residence'},
        { id: 2, title: 'Mr.Vinoth Residence', cat: 'Residential', loc: 'Kurumbampalyam, CBE', img: img2 ,link: '/projects/mr-vinoth-residence'},
  ];

  return (
    <section className="story-project-featured-sections">
      
      <style>
        {`
          .story-project-works-grid {
            --base-card-height: 600px;
          }
          @media (min-width: 1200px) {
            .story-project-works-grid {
              --base-card-height: 100vh;
            }
          }
          @media (max-width: 992px) {
            .story-project-works-grid {
              --base-card-height: calc(100vh - 280px);
            }
          }
          @media (max-width: 768px) {
            .story-project-works-grid {
              --base-card-height: calc(100vh - 250px);
            }
          }
          @media (max-width: 480px) {
            .story-project-works-grid {
              --base-card-height: calc(80vh - 230px);
            }
          }
        `}
      </style>

      <div className="story-project-work-header ">
        <div className="story-project-title-container">
          <div className="story-project-label-row">
            <span className="story-project-orange-square">■</span>
            <div className="story-project-label-container">
              <span className="story-project-label-text">Recent Work</span>
            </div>
          </div>
        </div>
        
        <h2 className="story-project-section-title tit">Featured Works</h2>
        <p className="story-project-section-desc-wrk des">
          We craft thoughtful, contemporary architecture built on precision & clarity
        </p>
      </div>

      <div className="story-project-works-grid" style={{ height: `calc(var(--base-card-height) + ${(works.length - 1) * 100}vh)` }}>
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className="story-project-card-wrapper"
            style={{ 
              height: `calc(var(--base-card-height) + ${index * 100}vh)`, 
              zIndex: works.length - index
            }}
          >
            {/* 
              MASTER FIX:
              முதல் கார்டுக்கு (index === 0) மட்டும் position: relative கொடுக்கப்பட்டுள்ளது.
              இதனால் அது Scroll ஆகும் போது ஒரு நொடி கூட நிற்காமல் (0 Pause / 0 Lag) உடனே மேலே சென்றுவிடும். 
            */}
            <div 
              className="story-project-work-card"
              style={
                index === 0 
                  ? { position: 'relative', top: '0px' } 
                  : {}
              }
            >
              <img src={work.img} alt={work.title} className="story-project-work-img" />
              
              <div className="story-project-overlay d-flex flex-row">

                <div className="story-project-title-row-icon">
                    <img src={Icon} alt="Project Icon" className="story-project-project-icon" /> 
                    <h3 className="story-project-project-title">{work.title}</h3>
                  </div>

                <div className="story-project-project-info">
                  
                  <div className="story-project-tags">
                    <span className="story-project-tag">{work.cat}</span>
                    <span className="story-project-tag">{work.loc}</span>
                  </div>
                  <Link to={work.link} className="story-project-linkss">
                  <div>
                    <button className="story-project-client-project-btn">
                      <span className="story-project-featured-text">Detailed Project</span>
                      <span className="story-project-featured-arrow-box">
                        <svg
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="28" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="#1a1a1a"
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;