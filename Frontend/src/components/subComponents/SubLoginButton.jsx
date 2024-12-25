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
      <Button
        component={Link}
        to="/login"
        className="custom-button first-button"
      >
        Book a demo or Get in touch with us
      </Button>
      {/* <Button
        component={Link}
        to="/signup"
        className="custom-button second-button"
      >
        Get in touch with us
      </Button> */}
    </ButtonGroup>
  );
};

export default SubLoginButton;
