import { useState, useEffect, useRef } from 'react';
import './css/ServicesSection.css'; // Make sure this path is correct

import img1 from '../../assets/skykaptureimagesanthoshh (9).webp';
import img2 from '../../assets/Mr Vinoth Residence (1).webp';
import img3 from '../../assets/BPCL (7).webp';
import img4 from '../../assets/FRONTIMAGE.webp';
import img5 from '../../assets/e-design.webp';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Tracks cards that have reached the overlapping (sticky) state
  const [overlappedCards, setOverlappedCards] = useState([]);
  
  // To keep the hover functionality alongside the scroll functionality
  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  const cardRefs = useRef([]);

  const services = [
    { id: '001', title: 'Residential Design', desc: 'Complete home interiors built around your vision, thoughtfully designed, precisely executed, uniquely yours.', count: '25+', img: img1 },
    { id: '002', title: 'Interior Renovations', desc: 'Sometimes a space just needs a second chance. We give it one, with better design and sharper detail.', count: '30+', img: img2 },
    { id: '003', title: 'Commercial Interior Design', desc: 'We turn commercial spaces into powerful brand experiences functional, striking, and built to last.', count: '15+', img: img3 },
    { id: '004', title: 'Styling & Decor', desc: 'Turnkey residential and commercial interiors designed around your life.', count: '40+', img: img4 },
    { id: '005', title: 'Virtual E-Design', desc: 'Transform your space from anywhere with stunning layouts and furnishing plans, designed and delivered to your door digitally.', count: '40+', img: img5 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const activeStacks = [];
      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          // 120px is your CSS sticky top value. 
          // We use 125px to give a slight buffer so it triggers exactly as it stacks.
          if (rect.top <= 125) {
            activeStacks.push(index);
          }
        }
      });
      setOverlappedCards(activeStacks);
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="title-row">
          <span className="orange-square2 stit ">■</span>
          <div className="title-box">
            <h2 className="title-text tit">End-to-End Architectural</h2>
            <div className="title-underline" />
            <h2 className="title-text tit">Solutions</h2>
          </div>
        </div>
        
        <h1 className="pg-title tit">Personalized Care.<br />Inspired Spaces.</h1>
        
        <div>
          <p className="subtitle1 des">Creative solutions tailored for every style and <br/> every space.</p>
         <Link to="/approach">
          <button className="view-all-btn3 ">
            <span className="text3 stit ">View All Services</span>
            <span className="arrow-box3"><span className="arr-diagonal1 stit"><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 -3 24 24" 
  fill="none" 
  stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
  strokeWidth="1.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span></span>
          </button>
          </Link>
        </div>
      </div>

      <div className="services-list">
        {services.map((item, index) => {
          // Check if it's the last card
          const isLastItem = index === services.length - 1;
          // Card is active if it's currently hovered OR if it has scrolled into the overlap position
          const isActive = hoveredIdx === index || overlappedCards.includes(index);
          
          return (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`service-item ${isActive ? 'active-service' : ''}`}
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setHoveredIdx(index)}
              onBlur={() => setHoveredIdx(null)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
            >
              <div className="vertical-line-container">
                <span className="orange-square-small">■</span>
                <span className="item-id des">({item.id})</span>

                {/* Conditionally render the line if it's NOT the last item */}
                {!isLastItem && (
                  <div className="vertical-line1" aria-hidden="true">
                    <span className="vertical-fill" />
                    <span className="line-spark" />
                  </div>
                )}
              </div>

              <div className="service-content">
                <h3 className='tit'>{item.title}</h3>
                <p className='des'>{item.desc}</p>
                <div className="count tit">{item.count}</div>
                <span className="sub-text des">Transformed Spaces</span>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
              <img src={item.img} alt={item.title} className="service-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;