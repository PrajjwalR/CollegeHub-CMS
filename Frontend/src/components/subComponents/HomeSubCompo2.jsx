import { NavLink } from 'react-router-dom';

function HomeSubCompo2() {
  return (
    <div className="home-sub-main-container2">
      <section className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature-item">
            <h3>Seamless Authentication</h3>
            <p>
              Log in securely with Passport.js to manage your college tasks
              effortlessly.
            </p>
          </div>
          <div className="feature-item">
            <h3>Student Dashboard</h3>
            <p>
              Track your assignments, schedules, and announcements in one place.
            </p>
          </div>
          <div className="feature-item">
            <h3>Admin Control</h3>
            <p>
              Empower administrators with tools to manage students, staff, and
              events.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Join?</h2>
        <p>Sign up today and experience the power of collegeHUB!</p>
        <NavLink to="/signup" className="cta-button">
          Sign Up
        </NavLink>
      </section>
    </div>
  );
}

export default HomeSubCompo2;
