import { Box, Heading, Image } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slider.css'
import imgBanner from '../../../assets/banner_img.png'
import imgBanner2 from '../../../assets/banner_img_two.png'
import imgBannerMobile from '../../../assets/banner_img_mobile.png'
import imgBannerMobile2 from '../../../assets/banner_img_mobile_two.png'

const Slider = () => {
    return (
        <Box className="fadeIn">
            <Carousel className="slider-desktop" showThumbs={false} emulateTouch={true} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} showArrows={false}>
                <Box position="relative" zIndex="banner">
                    <Image src={imgBanner}/>
                    <Heading fontSize="60px" lineHeight="1" className="slider-title fadeIn"><span className="slider-gradient">NFT</span> MARKET PLACE</Heading>
                </Box>
                <Box>
                    <Image src={imgBanner2} />
                    <Heading fontSize="60px" lineHeight="1" className="slider-title fadeIn">2025  MARKET<span className="slider-gradient"> ITEM </span></Heading>
                </Box>
            </Carousel>

            <Carousel className="slider-mobile" showThumbs={false} emulateTouch={true} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} showArrows={false}>
                <Box>
                    <Image src={imgBannerMobile2} />
                    <Heading fontSize="45px" lineHeight="1" className="slider-title"><span className="slider-gradient">NFT</span> MARKET PLACE</Heading>
                </Box>
                <Box>
                    <Image src={imgBannerMobile} />
                </Box>
            </Carousel>
        </Box>
    )
}

export default Slider