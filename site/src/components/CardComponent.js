import React, { Component } from 'react';
class CardComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div className="CardComponent">
        <figure>
          <img src={this.props.figure} />
        </figure>
        <div className="CardComponent__content">
          <div className="CardComponent__content__recap">
            <h2>{this.props.city}</h2>
            <span className="CardComponent__content__nazione">{this.props.nation}</span>
            <span className="CardComponent__content__time icon icon--calendar">{this.props.time}</span>
          </div>
          <div className="CardComponent__content__pricing">
            Ho speso in totale
            <span>&euro; {this.props.cost}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
