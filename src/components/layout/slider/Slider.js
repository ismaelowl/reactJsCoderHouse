import { Box, Image } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css'

const Slider = () => {
    return (
        <Carousel showThumbs={false} emulateTouch={true} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} showArrows={false}>
            <Box><Image src="https://via.placeholder.com/1920x600"></Image></Box>
            <Box><Image src="https://via.placeholder.com/1920x600"></Image></Box>
            <Box><Image src="https://via.placeholder.com/1920x600"></Image></Box>
        </Carousel>
    )
}

export default Slider