// ScrollToTop.jsx
import React, { useState, useEffect } from "react";

import "./ScrollTotop.css"; // Make sure to create this CSS file for styling

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
  
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
