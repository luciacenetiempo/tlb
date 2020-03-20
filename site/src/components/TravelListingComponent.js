import React, { Component } from 'react';
import CardComponent from './CardComponent';
import Slider from "react-slick";
class TravelListingComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section id="TravelListingComponent" className="TravelListingComponent">
        <div className="TravelListingComponent__content">
          <h2><span className="small">COSA HO VISTO DI BELLO?</span> <strong>I miei viaggi</strong></h2>
          <p>No, ti giuro che non sto vendendo niente, quella che vedi è solo la cifra che ho speso io.<br/>Insomma, se vuoi capire cosa si intende per BUMERS devi anche sapere quanto ho pagato!</p>
        </div>
        <Slider {...settings}>
          <CardComponent 
            figure="../assets/images/placeholder-next-trip.jpg"
            city="Paros"
            nation="Grecia"
            time="15 giorni"
            cost="700"
          />
          <CardComponent 
            figure="../assets/images/placeholder-next-trip.jpg"
            city="Paros"
            nation="Grecia"
            time="15 giorni"
            cost="700"
          />
          <CardComponent 
            figure="../assets/images/placeholder-next-trip.jpg"
            city="Paros"
            nation="Grecia"
            time="15 giorni"
            cost="700"
          />
          <CardComponent 
            figure="../assets/images/placeholder-next-trip.jpg"
            city="Paros"
            nation="Grecia"
            time="15 giorni"
            cost="700"
          />
          <CardComponent 
            figure="../assets/images/placeholder-next-trip.jpg"
            city="Paros"
            nation="Grecia"
            time="15 giorni"
            cost="700"
          />
        </Slider>
      </section>
    );
  }
}

export default TravelListingComponent;
