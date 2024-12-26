import { Link } from 'react-router-dom';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="about-footer">
        CollegeHUB is developed by a developer who's passionate about
        developement.
      </p>
      <p className="rights-element">
        &copy; 2024 collegeHUB. All rights reserved.
      </p>
      <div className="footer-links">
        <Link to="/privacy" className="footer-links-a">
          Privacy Policy
        </Link>
        <Link to="/terms" className="footer-links-a">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
