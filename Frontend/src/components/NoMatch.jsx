import { Link } from 'react-router-dom';
import '../CSS/NoMatch.css';

function NoMatch() {
  return (
    <div className="no-match-container">
      <h2>404: Page Not Found</h2>
      <p>This is not going anywhere, we should start from the beginning.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NoMatch;
