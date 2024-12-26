import React from 'react';
// import HomeSubCompoScrollablePhotos from './subComponents/HomeSubCompoScrollablePhotos';
import ImageSlider from './ImageSlider';
import '../CSS/About.css';

function About() {
  return (
    <div className="about-container">
      <header>
        <h1>About CollegeHUB</h1>

        {/* <HomeSubCompoScrollablePhotos></HomeSubCompoScrollablePhotos> */}
      </header>
      <ImageSlider></ImageSlider>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          CollegeHUB is a comprehensive platform designed to streamline the
          management of college tasks. Our mission is to make college life
          simpler and more efficient for students, faculty, and administrators.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          perspiciatis laborum debitis deleniti qui autem eligendi ea. Corrupti
          nobis quas itaque eaque temporibus aut laudantium cumque recusandae
          totam fugiat sapiente fugit accusantium qui enim, saepe doloribus, vel
          placeat repellat ex blanditiis asperiores veniam. Ullam consectetur
          odit dicta sapiente quaerat commodi quas suscipit quam, in laborum
          illo necessitatibus optio sunt ducimus.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          ipsam consequuntur optio omnis voluptate quisquam, soluta odio esse
          distinctio, molestiae qui recusandae perferendis. Ipsum fuga
          laboriosam odit quasi, vero impedit?
        </p>
      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React.js, Redux, Material UI
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB
          </li>
          <li>
            <strong>Authentication:</strong> Passport.js
          </li>
        </ul>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Seamless Authentication</h3>
            <p>
              Secure login and registration for students and faculty using
              Passport.js.
            </p>
          </div>
          <div className="feature-item">
            <h3>Student Dashboard</h3>
            <p>Track assignments, schedules, and announcements in one place.</p>
          </div>
          <div className="feature-item">
            <h3>Admin Control</h3>
            <p>Powerful admin tools to manage users, events, and data.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
