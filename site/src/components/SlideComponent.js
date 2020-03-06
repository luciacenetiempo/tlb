import React, { Component } from 'react';
class SlideComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div id="SlideComponent" className="SlideComponent">
        <img src={this.props.image} alt={this.props.imageAlt} />
        <div className="SlideComponent__content">
          <h2><span className="small">PROSSIMA DESTINAZIONE</span><br/><strong>{this.props.city}</strong></h2>
          <a href={this.props.link} className="cta cta--btn">{this.props.ctaLabel}</a>
        </div>
      </div>
    );
  }
}

export default SlideComponent;