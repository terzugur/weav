import React from "react";

import { Carousel, Image } from "antd";

import carouselItem1 from "../assets/carouselItem1.jpg";

const contentStyle = {
    height: window.innerHeight,
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

export default class Slider extends React.Component {
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
          };
        return (
            <Carousel ref={slider => (this.slider = slider)} {...settings}>
                <div>
                    <Image 
                    height= {window.innerHeight}
                    width= {window.innerWidth}
                    src={carouselItem1}></Image>
                </div>
                <div>
                <Image 
                    height= {window.innerHeight}
                    width= {window.innerWidth}
                    src={carouselItem1}></Image>
                </div>
                <div>
                <Image 
                    height= {window.innerHeight}
                    width= {window.innerWidth}
                    src={carouselItem1}></Image>
                </div>
                <div>
                <Image 
                    height= {window.innerHeight}
                    width= {window.innerWidth}
                    src={carouselItem1}></Image>
                </div>
            </Carousel>
        );
    }
}
