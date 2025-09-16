import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import img1 from './assets/cube_pictures/IMG_1047.jpeg';
import img2 from './assets/cube_pictures/IMG_1048.jpeg';
import img3 from './assets/cube_pictures/IMG_1049.jpeg';
import img4 from './assets/cube_pictures/IMG_1052.jpeg';

const Cube = () => (
        <AwesomeSlider>
            <div data-src={img1} />
            <div data-src={img2} />
            <div data-src={img3} />
            <div data-src={img4} />
        </AwesomeSlider>
);

export default Cube;