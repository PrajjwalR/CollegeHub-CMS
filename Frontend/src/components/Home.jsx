import '../CSS/Home.css';
import { Container, Box } from '@mui/material';
import ImageSlider from './ImageSlider';
import SubLoginButton from '../components/subComponents/SubLoginButton';

function Home() {
  return (
    <div className="main-container">
      <Container
        className="universityImg-container"
        maxWidth={false}
        disableGutters
      >
        <Box
          className="slider-container"
          sx={{ position: 'relative', height: '100vh' }}
        >
          <ImageSlider />
          <Box className="button-overlay">
            <SubLoginButton />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
