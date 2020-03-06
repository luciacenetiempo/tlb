import React, { Component } from 'react';
import Slider from "react-slick";
import InstagramEmbed from 'react-instagram-embed';
class InstagramComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <section id="InstagramComponent" className="InstagramComponent">
        <div className="InstagramComponent__content">
          <Slider {...settings}>
            <InstagramEmbed
              url='https://www.instagram.com/p/B9AIIpRIJnm/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B8832pUI4U_/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B88kNj3I6Qk/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B86o8CIIDbK/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B88kNj3I6Qk/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/B88kNj3I6Qk/'
              hideCaption={true}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </Slider>
        </div>
      </section>
    );
  }
}

export default InstagramComponent;
