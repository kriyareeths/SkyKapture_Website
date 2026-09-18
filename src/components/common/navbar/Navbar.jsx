import React, { useState, useEffect } from 'react'; 
import './Navbar.css';
import logo from '../../../assets/white-Photoroom (2) 1.webp'; 
import { NavLink, Link, useLocation } from 'react-router-dom'; // 👈 useLocation import cheyandi

// --- Social Icons Imports ---
import fbIcon from "../../../assets/facebook.webp";
import pinIcon from "../../../assets/pinterest.webp";
import inIcon from "../../../assets/linkedin.webp";
import igIcon from "../../../assets/instagram.webp";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  
  // 👈 Puthu code: Current page path thelusukovadaniki
  const location = useLocation();
  const isHomePage = location.pathname === '/'; 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (

    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${!isHomePage ? 'other-pages' : ''}`}>
      
      <div className="nav-mobile-header">
        <div className="nav-logo-box">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Sky Kapture Interiors" />
          </Link>
        </div>

        <div className="nav-hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      <nav className={`nav-links-container ${isMobileMenuOpen ? 'show-menu' : ''}`}>
        <NavLink end to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>HOME</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>PROJECTS</NavLink>
        <NavLink to="/approach" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>APPROACH</NavLink>
        <NavLink to="/our-studio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>OUR STUDIO</NavLink>
        <NavLink to="/insights" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={handleLinkClick}>INSIGHTS</NavLink>

        <div className="mobile-social-icons">
            <img src={fbIcon} alt="Facebook" className="social-icon" />
            <img src={pinIcon} alt="Pinterest" className="social-icon" />
            <img src={inIcon} alt="LinkedIn" className="social-icon" />
            <img src={igIcon} alt="Instagram" className="social-icon" />
         </div>
      </nav>

      <div className="nav-project-btn-group">
        <Link to='/start-a-project'>
          <button className="btn-text-part">Start a Project</button>
        </Link>
        <Link to='/start-a-project'>
          <button className="btn-arrow-part">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
};               

export default Navbar;