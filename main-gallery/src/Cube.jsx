import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

function Cube() {
    return (
        <AwesomeSlider animation="cubeAnimation">
            <div data-src="/assets/cube_pictures/IMG_1047.jpeg" />
            <div data-src="/assets/cube_pictures/IMG_1048.jpeg" />
            <div data-src="/assets/cube_pictures/IMG_1049.jpeg" />
            <div data-src="/assets/cube_pictures/IMG_1052.jpeg" />
        </AwesomeSlider>
    )
};

export default Cube;