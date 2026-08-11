import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Скролл жасағанда мобилді менюді жабу
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#" className="logo">
          <div className="logo-mark">Г</div>
          <div className="logo-text">
            <span className="logo-title">Гүлден </span>
            <span className="logo-sub">Бөбекжай балабақшасы</span>
          </div>
        </a>

        <nav className={`links ${isOpen ? 'open' : ''}`} id="navLinks">
          <a href="#about" onClick={() => setIsOpen(false)}>Біз туралы</a>
          <a href="#groups" onClick={() => setIsOpen(false)}>Топтар</a>
          <a href="#day" onClick={() => setIsOpen(false)}>Күн тәртібі</a>
          <a href="#gallery" onClick={() => setIsOpen(false)}>Галерея</a>
          <a href="#trust" onClick={() => setIsOpen(false)}>Құжаттар</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Байланыс</a>
          <a href="#contact" className="btn btn-primary btn-mobile-only" onClick={() => setIsOpen(false)}>
            Өтінім қалдыру
          </a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="btn btn-primary btn-desktop">Өтінім қалдыру</a>
          <button 
            className={`menu-toggle ${isOpen ? 'active' : ''}`} 
            id="menuBtn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню ашу"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isOpen && <div className="mobile-overlay" onClick={() => setIsOpen(false)}></div>}
    </header>
  );
}