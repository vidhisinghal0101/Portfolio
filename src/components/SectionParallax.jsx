import React, { useRef, useEffect } from 'react';
import './SectionParallax.css';

const SectionParallax = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const midRef = useRef(null);
  const fgRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !containerRef.current.parentElement) {
            ticking = false;
            return;
          }
          
          const rect = containerRef.current.parentElement.getBoundingClientRect();
          
          // Only apply parallax if the section is in the viewport
          if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Calculate scroll offset relative to when the section enters the viewport
            const scrollOffset = window.innerHeight - rect.top;
            
            if (bgRef.current) bgRef.current.style.transform = `translateY(${scrollOffset * 0.1}px)`;
            if (midRef.current) midRef.current.style.transform = `translateY(${scrollOffset * 0.15}px)`;
            if (fgRef.current) fgRef.current.style.transform = `translateY(${scrollOffset * 0.2}px)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="section-parallax-container" ref={containerRef}>
      <div className="parallax-layer bg-layer" ref={bgRef}></div>
      <div className="parallax-layer mid-layer" ref={midRef}>
        <div className="circle-shape shape-1"></div>
      </div>
      <div className="parallax-layer fg-layer" ref={fgRef}>
        <div className="circle-shape shape-2"></div>
      </div>
    </div>
  );
};

export default SectionParallax;
