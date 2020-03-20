import React, { Component } from 'react';
import Slider from "react-slick";
import SlideComponent from './SlideComponent';
class NextTravelComponent extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }; 
    return (
      <section id="NextTravelComponent" className="NextTravelComponent">
        <Slider {...settings}>
          <SlideComponent 
            image="assets/images/placeholder-next-trip.jpg"
            imageAlt="alt text"
            city="Barcellona"
            link="http://www.google.com"
            ctaLabel="Consigliami"
          />  
          <SlideComponent 
            image="assets/images/placeholder-next-trip.jpg"
            imageAlt="alt text"
            city="Milano"
            link="http://www.google.com"
            ctaLabel="Consigliami"
          />  
          <SlideComponent 
            image="assets/images/placeholder-next-trip.jpg"
            imageAlt="alt text"
            city="Napoli"
            link="http://www.google.com"
            ctaLabel="Consigliami"
          />  
        </Slider>
      </section>
    );
  }
}

export default NextTravelComponent;