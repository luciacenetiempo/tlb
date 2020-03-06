import React, { Component } from 'react';
class AboutComponent extends Component {
  render() {

    return (
      <section id="AboutComponent" className="AboutComponent">
        <div className="AboutComponent__content">
          <h2><span className="small">VUOI SAPERE CHI SONO?</span><br/><strong>Te lo raconto subito!</strong></h2>
        </div>
        <div className="AboutComponent__table">
          <div className="AboutComponent__table__left" data-background="https://scontent-mxp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/84350687_2306110009690263_6104840451398395220_n.jpg?_nc_ht=scontent-mxp1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=eNjNLKQGQlwAX8UD2ud&oh=b787a97d872e244fff22e6e0a86119c3&oe=5E80F12E">
            <h3>Perchè Travel Like a Bum?<br/>Facile a dirsi.</h3>
            <p>Donna, una compagna di viaggio e due cani quasi sempre con noi. <br/>
            Son più le volte che ho cambiato residenza nella mia vita che quelle in cui ho scelto di fermarmi. Mi piace girare, guardare, curiosare e ascoltare. Ma ora ho voglia di raccontare i miei viaggi un po’ “like a bum”.<br/>
            E no, la parola BUM non vuol dire culo :D</p>
            <a href="m.me/luciacenetiempo" className="cta cta--button cta--messanger">CHATTA CON ME!</a>
          </div>
          <div className="AboutComponent__table__right">
            <figure>
              <img src="../assets/images/profile.jpg" />
            </figure>
            <div className="AboutComponent__table__right__content">
              <a href="http://www.luciacenetiempo.com">www.luciacenetiempo.com</a>
              <p>Born @ #seaside - Explorer @ #world<br/>Lover @ #aperitif - Hosted @ #milano<br/>Interaction & Frontend Developer</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutComponent;
