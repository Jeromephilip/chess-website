import React from 'react'
import Cards from '../Card/Cards'
import Carousel from '../Carousel/Carousel'
import './about.css'

function About() {
    return (
        <div>
            <div className="container">
                <div className="About-us-container" id="about">
                    <div className="About-us-text">
                        <h1 className="About-us-heading"><span className="headline">About Us</span></h1>
                        <div className="About-us-content-div">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id suscipit ipsum. 
                            Integer commodo, lorem ut tempor molestie, quam nulla tristique purus, id commodo nisl mi a arcu. 
                            Quisque ultricies egestas sem vitae vestibulum. Etiam sem nunc, maximus vitae erat vitae, tristique 
                            tempor elit. Nulla ligula massa, interdum non massa id, efficitur tristique velit. 
                            Nulla elementum, velit ut elementum laoreet, elit augue blandit mi, quis commodo 
                            nulla felis vel ligula. Phasellus volutpat diam id molestie imperdiet. Nullam vitae congue turpis, 
                            finibus aliquet eros. Vestibulum varius ac ex non mollis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="About-us-cards">
                    <h1 className="About-us-heading-cards">
                        <span className="headline-cards">What do we do?</span>
                    </h1>
                </div>
            </div>
            <div>
                <Cards/>
            </div>
        </div> 
    )
}

export default About