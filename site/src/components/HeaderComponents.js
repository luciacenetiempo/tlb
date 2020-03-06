import React, { Component } from 'react';
class HeaderComponent extends Component {
  render() {

    return (
      <header>
          <div className="header__ontop">
              <nav className="header__ontop__menu">
                <ul>
                  <li>
                    <a href="m.me/luciacenetiempo" target="_blank"> 
                      <span className="icon icon--messanger"><img src="../assets/images/icons/icon-chat.svg" alt="Messanger"/></span>
                      Messanger
                    </a>
                  </li>
                  <li>
                    <a href="mailto:luciacenetiempo@gmail.com" target="_blank">
                      <span className="icon icon--mail"><img src="../assets/images/icons/icon-email.svg" alt="Mail"/></span>
                      Contatti
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/lucia.cenetiempo/" target="_blank">
                      <span className="icon icon--instagram"><img src="../assets/images/icons/icon-instagram.svg" alt="Instagram"/></span>
                      Instagram
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
          <div className="header__navigation">
            <nav className="header__navigation__menu">
              <img className="header__navigation__menu__logo" src="../assets/images/logo-travel-like-a-bum.png" alt="Logo Travel Like A Bum -  Blog di Viaggi"/>
              <ul>
                <li>
                  <a href=""><strong>I miei viaggi</strong><br/>quelli passati</a>
                </li>
                <li>
                  <a href=""><strong>Le destinazioni</strong><br/>quelle future</a>
                </li>
                <li>
                  <a href=""><strong>Le mie idee</strong><br/>e altre amenità</a>
                </li>
              </ul>
            </nav>
          </div>
      </header>
    );
  }
}

export default HeaderComponent;
