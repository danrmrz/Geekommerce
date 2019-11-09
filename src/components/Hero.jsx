import React from 'react';
import '../assets/styles/components/Hero.scss'

const Hero = ({ children }) => (
  <section className="hero">
    <div className="hero__container">
      {children}
    </div>
  </section>
);

export default Hero;