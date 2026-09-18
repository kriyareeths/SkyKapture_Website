import { useState, useEffect } from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';

// Thumbnail images மட்டுமே import செய்கிறோம்
import thumb2 from '../../assets/herobanner2.webp';
import thumb1 from '../../assets/herobanner4.webp';
import thumb3 from '../../assets/herobanner3.webp';
import thumb4 from '../../assets/herobanner1.webp';

const thumbs = [
  {
    image: thumb2,
    title: 'Azure Hallway',
    link: '#1',
    heading: 'We Design Your Dream',
    description: 'From the first nail to the final finish, spaces that feel like you, built with precision and passion.',
    watermark: 'Design'
  },
  {
    image: thumb1,
    title: 'Coastal Serenity',
    link: '#2',
    heading: 'The Art of Living Well',
    description: 'Your home deserves more than furniture. It deserves a story crafted just for you.',
    watermark: 'Spaces'
  },
  {
    image: thumb3,
    title: 'Elegant Space',
    link: '#3',
    heading: 'Spaces That Feel Right.',
    description: "Spaces That Feel Like Home.'We don't just design rooms. We design the feeling you get when you walk in.",
    watermark: 'Vision'
  },
  {
    image: thumb4,
    title: 'Minimalist Elegance',
    link: '#4',
    heading: 'Design Beyond The Look.',
    description: "We build spaces that feel as good as they appear, crafted around your life, your taste, and your home. Let's begin.",
    watermark: 'Living'
  },
];

const Home = () => {
  const [currentThumb, setCurrentThumb] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentThumb((prev) => (prev + 1) % thumbs.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      
      {/* =========================================
          Background Slider (இது Full Screen-ல் இருக்கும்)
          ========================================= */}
      {thumbs.map((thumb, index) => (
        <div
          key={`bg-${index}`}
          className={`hero-bg ${index === currentThumb ? 'active' : ''}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)), url("${thumb.image}")`,
          }}
        ></div>
      ))} 
      
      {/* =========================================
          Content Limiter (இது 2000px-க்கு மேல் விரியாது)
          ========================================= */}
      <div 
        className="hero-content-limiter" 
        style={{ 
          maxWidth: '2000px', 
          margin: '0 auto', 
          width: '100%', 
          height: '100%', 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          zIndex: 2 // Background-க்கு மேலே தெரிய
        }}
      >
        {/* மெயின் கன்டென்ட் */}
        <main className="main-content">
          <div className="left-indicator-bar">
              <div className={`indicator-dot top-dot ${currentThumb % 2 === 0 ? 'filled' : 'hollow'}`}></div>
              <div className="vertical-line"></div>
              <div className={`indicator-dot bottom-dot ${currentThumb % 2 === 0 ? 'hollow' : 'filled'}`}></div>
            </div>

          <div className="text-section">
            <h1 className="hero-title" key={`title-${currentThumb}`}>
              {thumbs[currentThumb].heading}
            </h1>
            <p className="hero-description" key={`desc-${currentThumb}`}>
              {thumbs[currentThumb].description}
            </p>

            <div className="thumbnail-card">
              <img
                key={currentThumb}
                src={thumbs[currentThumb].image}
                alt={thumbs[currentThumb].title}
                className="thumb-img thumb-fade"
              />
              <div className="thumbnail-footer">
                <span className="thumb-title">{thumbs[currentThumb].title}</span>
                <a href={thumbs[currentThumb].link} className="thumb-arrow">➔</a>
              </div>
            </div>

            <div className="action-row">
              <a href="#add" className="plus-btn">+</a>
              <Link to="start-a-project" className="book-call-btn">Book a Call</Link>
            </div>
          </div>
        </main>

        <div className="watermark-wrap">
          <div className="huge-watermark" key={`wm-${currentThumb}`}>
            {thumbs[currentThumb].watermark.split("").map((letter, index) => (
              <span
                key={index}
                className="reveal-letter"
                style={{ animationDelay: `${index * 0.1}s` }} 
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      </div> {/* End of Content Limiter */}

    </div>
  );
};

export default Home;