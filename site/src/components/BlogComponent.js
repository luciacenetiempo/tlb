import React, { Component } from 'react';
class BlogComponent extends Component {
  render() {

    return (
      <section id="BlogComponent" className="BlogComponent">
        <div className="BlogComponent__content">
          <h2><span className="small">VUOI CHE TI RACCONTI QUALCOS'ALTRO?</span><br/><strong>Ok, ecco altre amenità!</strong></h2>
          <div className="BlogComponent__content__wrap">
            <div className="BlogComponent__content__wrap__col BlogComponent__content__wrap__col--left">
              <article>
                <figure>
                  <img src="../assets/images/placeholder-blogpost.jpg" alt="Titolo post"/>
                </figure>
                <div className="article__content">
                  <span className="date">22 febbraio 2020</span>
                  <h3><a href="">Caption su Instagram, come scriverle in maniera efficace</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
              </article>
            </div>
            <div className="BlogComponent__content__wrap__col BlogComponent__content__wrap__col--right">
              <article>
                <figure>
                  <img src="../assets/images/placeholder-blogpost.jpg" alt="Titolo post"/>
                </figure>
                <div className="article__content">
                  <span className="date">22 febbraio 2020</span>
                  <h3><a href="">Caption su Instagram, come scriverle in maniera efficace</a></h3>
                </div>
              </article>
              <article>
                <figure>
                  <img src="../assets/images/placeholder-blogpost.jpg" alt="Titolo post"/>
                </figure>
                <div className="article__content">
                  <span className="date">22 febbraio 2020</span>
                  <h3><a href="">Caption su Instagram, come scriverle in maniera efficace</a></h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogComponent;
