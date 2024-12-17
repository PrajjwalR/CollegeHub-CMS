import Slider from 'react-slick';
import { Box } from '@mui/material';
import '../CSS/Home.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const images = [
    'https://images.unsplash.com/20/cambridge.JPG?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D',

    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D',

    'https://cdn.pixabay.com/photo/2021/10/11/04/08/university-6699377_640.jpg',

    'https://media.istockphoto.com/id/1576357568/photo/group-of-high-school-students-attending-computer-class-in-the-classroom.jpg?s=612x612&w=0&k=20&c=bY_jKCb0zQLBnb2psD0F3fjjp6-YuIwRXUlWoxyxyi8=',
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', maxHeight: '500px' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="universityMain-images-slideshow"
              src={image}
              alt={`slide-${index}`}
              style={{ width: '100%', height: 'auto', objectFit: 'fit' }}
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
