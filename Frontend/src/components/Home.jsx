import '../CSS/Home.css';
import { Container, Typography, Box } from '@mui/material';
import ImageSlider from './ImageSlider';

function Home() {
  return (
    <div className="main-container">
      <Container className='universityImg-container'>
        <Box sx={{ my: 4 }} className="universityMain-img">
          <Typography variant="h3" gutterBottom align="center"></Typography>
          <ImageSlider />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
