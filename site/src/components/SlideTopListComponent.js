import React, { Component } from 'react';
class SlideTopListComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div id="SlideTopListComponent" className="SlideTopListComponent">
        <img src={this.props.image} alt={this.props.imageAlt} />
        <div className="SlideTopListComponent__content">
          <h2><span className="small">LA MIA TOP 3 PER</span><br/><strong>{this.props.city}</strong></h2>
          <div className="SlideTopListComponent__content__table">
            {/* ROW */}
            <div className="SlideTopListComponent__content__table__row">
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--title">

              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--what">
                Cosa
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--where">
                Dove
              </div>
            </div>
            {/* ROW */}
            {/* ROW */}
            <div className="SlideTopListComponent__content__table__row">
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--title">
                Food
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--what">
                Nome del cibo
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--where">
                Luogo dove lo hai provato
              </div>
            </div>
            {/* ROW */}
            {/* ROW */}
            <div className="SlideTopListComponent__content__table__row">
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--title">
                Life
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--what">
                Nome del life
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--where">
                Luogo dove lo hai provato
              </div>
            </div>
            {/* ROW */}
            {/* ROW */}
            <div className="SlideTopListComponent__content__table__row">
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--title">
                Culture
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--what">
                Nome del culture
              </div>
              <div className="SlideTopListComponent__content__table__row__col SlideTopListComponent__content__table__row__col--where">
                Luogo dove lo hai provato
              </div>
            </div>
            {/* ROW */}
          </div>
          <a href="link" className="cta cta--btn">Scopri le altre</a>
        </div>
      </div>
    );
  }
}

export default SlideTopListComponent;