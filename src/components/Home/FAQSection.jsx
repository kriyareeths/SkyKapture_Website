import { useState } from 'react';
import './css/faqSection.css';
import { Link } from 'react-router-dom';

const faqsData = [
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

const FaqsSection = () => {
  // 0 means the first question is open by default. (Change to null if you want all closed initially)
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    // Check if the clicked item is already active. If yes, close it (set to null). If no, open it (set to index).
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="sk-faq-section">
      <div className="sk-faq-header">
        <div className="sk-faq-labels-wrapper1 stit">
          <span className="sk-faq-orange-square4"></span> Client Resources
        </div>
        <h1 className="sk-faq-title alert">Got Questions?</h1>
        <p className="sk-faq-sub des">We've answered some of the most common questions about our services.</p>
        <Link to="/start-a-project">
        <button className="sk-faq-btn">
          <span className="sk-faq-btn-text stit">Contact Us</span>
          <span className="sk-faq-btn-arrow stit">
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
        </Link>
      </div>

      <div className="sk-faq-accordion">
        {faqsData.map((item, index) => (
          <div 
            key={index} 
            className={`sk-faq-item ${activeIndex === index ? 'sk-faq-active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="sk-faq-question">
              <span className='des'>{item.question}</span>
              <span className="sk-faq-icon">{activeIndex === index ? '—' : '+'}</span>
            </div>
            
            {/* The wrapper that handles the animation */}
            <div className={`sk-faq-answer-wrapper ${activeIndex === index ? 'sk-faq-open' : ''}`}>
              <div className="sk-faq-answer">
                <div className="sk-faq-answer-inner sdes">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;