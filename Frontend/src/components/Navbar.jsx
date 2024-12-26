import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import '../CSS/Navbar.css';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setScrolled(true);
      // console.log('Yes');
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h2>
        <NavLink to="/" className="main-logo">
          CollegeHUB
        </NavLink>
      </h2>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {isLoggedIn ? (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <ul className="auth-links">
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
