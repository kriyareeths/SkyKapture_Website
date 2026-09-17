import { useState, useEffect, useRef } from 'react';
import './css/Approach.css';
import icon1 from '../../assets/construction-icon.webp';
import icon2 from '../../assets/planning-icon.webp';
import icon3 from '../../assets/delivery-icon.webp';
import icon4 from '../../assets/landscape-icon.webp';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: icon1,
    title: "Construction and Management",
    desc: "We lead every stage of construction with precision, coordinating teams, managing timelines, and delivering flawless on-site results from foundation to finish."
  },
  {
    icon: icon2,
    title: "Architectural Planning & Design",
    desc: "We transform ideas into intelligent design strategies, crafting detailed plans and refined concepts that bring every project to life with clarity and purpose."
  },
  {
    icon: icon3,
    title: "Project Coordination & Delivery",
    desc: " We align schedules, teams, and resources seamlessly, ensuring every moving part stays on track, on budget, and delivered without compromise."
  },
  {
    icon: icon4,
    title: "Exterior & Landscape Design",
    desc: " We create outdoor spaces that breathe, combining natural elements, functional design, and visual balance to craft environments that inspire and endure."
  }
];

const useSectionInView = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

const ArchitecturalApproach = () => {
  const [sectionRef, sectionInView] = useSectionInView();
  const [activeCard, setActiveCard] = useState(-1);

  useEffect(() => {
    if (!sectionInView) {
      setActiveCard(-1);
      return;
    }

    setActiveCard(-1);
    const timers = cards.map((_, index) =>
      setTimeout(() => setActiveCard(index), index * 1800)
    );

    return () => timers.forEach(clearTimeout);
  }, [sectionInView]);

  return (
    <section ref={sectionRef} className={`approach-section ${sectionInView ? 'section-active' : ''}`}>
      <div className="approach-inner">
        <div className="approach-header">
          <div className="title-row1 ">
            <span className="orange-square1 stit">■</span>
            <h2 className="title-text1 tit">Architectural Approach</h2>
            <span className="gold-star-start"></span>
          </div>

          <h1 className="main-title1 col-6">
            <div className='line1 stit'>Our expertise spans every phase</div><div className='line2 stit'> of architecture vision,</div><div className='line3 stit'>design, execution, and excellence</div>
          </h1>
        </div>

        <div className="approach-grid">
          {cards.map((item, index) => (
            <div
              className={`approach-card ${activeCard >= index ? 'active' : ''}`}
              key={index}
            >
              <span className="number des">0{index + 1}.</span>
              <div className="card-line">
                <span className="spark-dot"></span>
              </div>
              <img src={item.icon} alt={item.title} className="card-icon" />
              <h3 className='stit'>{item.title}</h3>
              <p className='des'>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-btn-wrap">
          <Link to="/start-a-project" className="cta-btn">
            <span className="cta-text stit">Start a Project</span>
            <span className="cta-arrow-box ">
              <span className="arrow-diagonal "><svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" 
  height="28" 
  viewBox="0 -4 24 24" 
  fill="none" 
  stroke="#1a1a1a" /* படத்தில் உள்ளதை போன்ற கருப்பு நிறம் */
  strokeWidth="1.5" 
  strokeLinecap="round" 
  strokeLinejoin="round"
>
  <path d="M7 17L17 7" />
  <path d="M7 7h10v10" />
</svg></span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalApproach;