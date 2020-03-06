import './css/main.css';
import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponents';
import NextTravelComponent from './components/NextTravelComponent';
import TravelListingComponent from './components/TravelListingComponent';
import InstagramComponent from './components/InstagramComponent';
import AboutComponent from './components/AboutComponent';
import TopListComponent from './components/TopListComponent';
import BlogComponent from './components/BlogComponent';
import NewsletterComponent from './components/NewsletterComponent';
import FooterComponent from './components/FooterComponent';

class App extends Component {
  render() {

    return (
      <div className="App">
        <HeaderComponent />
        <NextTravelComponent />
        <TravelListingComponent />
        <AboutComponent />
        <TopListComponent />
        <BlogComponent />
        <NewsletterComponent />
        <FooterComponent />
        {/* <InstagramComponent /> */}
      </div>
    );
  }
}
export default App; 