import React from 'react';
import { Link } from 'react-router-dom';

function HomeSubCompo3() {
  return (
    <div className="home-sub-main-container3">
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial-item">
            <p>
              "collegeHUB has transformed the way I manage my tasks. It's simple
              and effective!"
            </p>
            <h4>- Priya Sharma</h4>
          </div>
          <div className="testimonial-item">
            <p>
              "As an admin, I love the control and insights I get to manage the
              college efficiently."
            </p>
            <h4>- Dr. Ramesh Kumar</h4>
          </div>
          <div className="testimonial-item">
            <p>
              "The dashboard is a game-changer! I never miss an assignment or
              event now."
            </p>
            <h4>- Aman Verma</h4>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <h2>Our Campus Life</h2>
        <div className="gallery">
          <img
            src="https://www.goshen.edu/wp-content/uploads/sites/7/2018/06/GC.Fall_.2017.860-web.jpg"
            alt="Campus View"
          />
          <img
            src="https://utc.edu.in/wp-content/uploads/2024/10/Lib.-18_13_11zon-scaled.jpg"
            alt="Library"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFPaRj9-M8vB3oYHDhGPrXhtg8IVLOu0NIg&s"
            alt="Students"
          />
        </div>
      </section>

      {/* Feature Spotlight */}
      <section className="spotlight-section">
        <h2>Why Choose Us?</h2>
        <div className="spotlight">
          <div className="spotlight-item">
            <h3>Innovative Learning</h3>
            <p>
              Explore cutting-edge tools and resources to stay ahead in your
              studies.
            </p>
          </div>
          <div className="spotlight-item">
            <h3>Expert Faculty</h3>
            <p>
              Learn from industry leaders and experienced educators dedicated to
              your success.
            </p>
          </div>
          <div className="spotlight-item">
            <h3>Community Support</h3>
            <p>
              Join a vibrant community of learners and professionals ready to
              help you excel.
            </p>
          </div>
        </div>
        <Link to="/about" className="learn-more-button">
          Learn More
        </Link>
      </section>
    </div>
  );
}

export default HomeSubCompo3;
