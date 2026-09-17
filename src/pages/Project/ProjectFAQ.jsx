
import '../../pages/Project/css/ProjectFAQ.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  { 
    question: 'What services does Sky Kapture Interiors offer',
    answer: 'We provide complete turnkey interior design for residential and commercial spaces covering 3BHK homes, modular kitchens, wardrobes, pooja units, false ceilings, TV units, office interiors, and elegant partitions. From concept to final handover, everything is handled by us.' 
  },
  { 
    question: 'How does a typical project start?',
    answer: 'It starts with a free consultation. We listen to your vision, understand your lifestyle and budget, and then visit the site for measurement. From there, we prepare your 2D floor plan and 3D visualization no work begins until you approve every detail.'
  },
  { 
    question: ' Do you handle renovations as well as new designs?',
    answer: 'Yes. Whether you are moving into a new home or refreshing an existing space, we handle both. We assess what can be retained and what needs replacing and design around your existing structure without compromising on the final look.' 
  },
  { 
    question: 'Can you work with an existing space or furniture?', 
    answer: 'Absolutely. We design around what you already have. Our team evaluates your current furniture, layout, and fixtures, then builds a cohesive design that blends new elements seamlessly with what you love and want to keep.' 
  },
  { 
    question: 'What is the typical project timeline?', 
    answer: 'Most residential projects are completed within 45 to 90 days depending on scope and size. We share a clear timeline during the planning stage and keep you updated at every milestone so there are no surprises from start to handover.' 
  },
];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const FAQSection = () => {
  // ஆரம்பத்தில் எந்த கேள்வியும் திறந்திருக்கக் கூடாது என்பதால் 'null' கொடுக்கப்பட்டுள்ளது
  const [activeIndex, setActiveIndex] = useState(null);

  // க்ளிக் செய்யும் போது, ஏற்கனவே திறந்திருந்தால் மூடிவிடும் (null), இல்லையென்றால் திறக்கும் (index)
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <div className="label-wrapper1 stit">
          <span className="orange-square4"></span> Client Resources
        </div>
        <h1 className="faq-title">Got Questions?</h1>
        <p className='faq-sub des'>We've answered some of the most common<br/> questions about our services.</p>
        <Link to="/start-a-project" onClick={scrollToTop}><button className="faq-btn">
          <span className="faq-btn-text stit">Contact Us</span>
          <span className="faq-btn-arrow"><svg 
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
</svg></span>
        </button></Link>
      </div>

      <div className="faq-accordion1">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="faq-question">
              <span className='des'>{item.question}</span>
              <span className="icon">{activeIndex === index ? '—' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer sdes">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;