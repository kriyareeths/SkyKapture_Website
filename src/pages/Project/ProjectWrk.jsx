import React from 'react';
import '../../components/Home/css/FeaturedWorks.css';
import "./css/ProjectWrk.css"
import img1 from '../../assets/skykaptureimage1.webp';
import img2 from '../../assets/skykaptureimage (1.1).webp';
import img3 from '../../assets/skykaptureimagesanthoshh (9).webp';
import img4 from '../../assets/MRS.PRIYA RESIDENCE (11).webp';
import img5 from '../../assets/KRUTHKA RESIDENCE (1).webp';
import img6 from '../../assets/MR PARAMAN RESIDENCE (2).webp';
import img7 from '../../assets/BPCL (7).webp';
import img8 from '../../assets/Diya Bridal Rental Jewellery (1).webp';
import Icon from '../../assets/icon-design.webp';
import { Link } from 'react-router-dom';

const FeaturedWorks = () => {
  const works = [
    { id: 1, title: 'Mr.Vinoth Residence', cat: 'Residential', loc: 'Kurumbampalyam, CBE', img: img1 ,link: '/projects/mr-vinoth-residence'},
    { id: 2, title: 'Mr.Santhosh Residence', cat: 'Residential', loc: 'Sundakamuthur, CBE', img: img3 ,link: '/projects/mr-santhosh-residence'},
    { id: 3, title: 'Mrs.Priya Residence', cat: 'Residential', loc: 'Nehru Nagar,CBE', img: img4 ,link: '/projects/mrs-priya-residence'},
    { id: 4, title: 'Krithika Residence', cat: 'Residential', loc: 'Malumichampatti,CBE', img: img5 ,link: '/projects/krithika-residence'},
    { id: 5, title: 'Mr.Paraman Residence', cat: 'Residential', loc: 'Saravanampatti,CBE', img: img6 ,link: '/projects/mr-paraman-residence'},
    { id: 6, title: 'Bharat Petroleum Corporation Limited', cat: 'Commercial', loc: 'Airport,CBE', img: img7 ,link: '/projects/bharat-petroleum-corporation-limited'},
    { id: 7, title: 'Diya Bridal Rental Jewellery', cat: 'Commercial', loc: 'Airport,CBE', img: img8 ,link: '/projects/dhiya-bridal-rental-jewellery'},
    { id: 8, title: 'SKY Kapture Interiors office', cat: 'Commercial', loc: 'Coimbatore, TN', img: img2 ,link: '/projects/sky-kapture-interiors-office'},
  ];

  return (
    <section className="story-project-featured-sections">
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

      {/* 
        The grid dynamically sets its height based on the number of cards 
        (+ 10vh buffer for the first card to avoid lag)
      */}
      <div className="story-project-works-grid" style={{ height: `${10 + (works.length * 100)}vh` }}>
        {works.map((work, index) => (
          <div 
            key={work.id} 
            className="story-project-card-wrapper"
            style={{ 
              // 110vh for index 0, 210vh for index 1, etc.
              height: `${110 + (index * 100)}vh`, 
              zIndex: works.length - index      // Reverses z-index so the first card is on top
            }}
          >
            <div className="story-project-work-card">
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
                          stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
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