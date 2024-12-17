import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../CSS/Home.css';
const SubLoginButton = () => {
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="Basic button group"
    >
      <Button component={Link} to="/login" className="custom-button">
        Book a demo
      </Button>
      <Button component={Link} to="/signup" className="custom-button">
        Get in touch with us
      </Button>
    </ButtonGroup>
  );
};

export default SubLoginButton;
