import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../CSS/Home.css';

const HomeSubCompo1 = () => {
  return (
    <div className="main-home-sub-container1">
      <div className="main-content-home-container1">
        <div className="hero-content">
          <p>
            Your all-in-one college management system. Simplify and enhance your
            college experience.
          </p>
          <NavLink to="/signup" className="cta-button">
            Book a demo with us
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomeSubCompo1;
