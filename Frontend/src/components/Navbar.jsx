import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/authSlice';
import '../CSS/Navbar.css';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar">
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
