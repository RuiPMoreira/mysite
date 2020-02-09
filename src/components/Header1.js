import React,{useEffect, useRef, useState } from 'react';

import "../Header1.css";

export default function Header1() {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    const navbarOffsetTop = (headerRef.current.getBoundingClientRect().top +
                            headerRef.current.getBoundingClientRect().height -
                            navbarRef.current.getBoundingClientRect().height);
    setSticky(navbarOffsetTop <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  
  return (
    <div className="header" ref={headerRef}>
      <div className="profile-name">Rui Moreira</div>
      <div className="profile-description">Software Engineer</div>
      <div className={`navbar ${isSticky ? "stiky" : ""}`} ref={navbarRef}>
        <a class="active" href="javascript:void(0)">About Me</a>
        <a href="javascript:void(0)">Projects</a>
        <a href="javascript:void(0)">Contact</a>
      </div>
    </div>
  );
}