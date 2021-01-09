import React, { Component } from 'react';
import "/Users/jerom/OneDrive/Desktop/Programming/ChessWebsite/chess-website/node_modules/slick-carousel/slick/slick.css";
import "/Users/jerom/OneDrive/Desktop/Programming/ChessWebsite/chess-website/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Carousel1 from '../../Images/carousel-one.png'
import Carousel2 from '../../Images/carousel-two.jpeg'
import './Carousel.css'

const photos = [
    {
        name: 'Photo 1',
        url: Carousel1
    },
    {
        name: 'Photo 2',
        url: Carousel2
    }
]


class Carousel extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidestoScroll: 1,
            className: "slides",
            cssEase: "linear",
            centerMode: true,
            swipeToSlide: true,
        }
    return (
            <div className="container-carousel">
                <div className="slider-wrapper">
                    <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div className="slick-slide">
                                <img className = "slick-slide-image" width= "100%" src={photo.url}/>
                            </div>
                        )
                    })}  
                    </Slider>
                </div>
            </div>
    )
    }
}

export default Carousel