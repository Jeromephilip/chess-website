import React, { Component } from 'react';
import "/Users/jerom/OneDrive/Desktop/Programming/ChessWebsite/chess-website/node_modules/slick-carousel/slick/slick.css";
import "/Users/jerom/OneDrive/Desktop/Programming/ChessWebsite/chess-website/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Carousel1 from '../../Images/carousel-one.png'
import Carousel2 from '../../Images/carousel-two.jpeg'

const photos = [
    // get image links to work. 
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
            dots: true,
            infinite: true,
            fade: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
        }
    return (
        <div className="Carousel">
            <Slider {...settings}>
              {photos.map((photo) => {
                  return(
                      <div>
                          <img alt="images" width="100%" src={photo.url}/>
                      </div>
                  )
              })}  
            </Slider>
        </div>
    )
    }
}

export default Carousel