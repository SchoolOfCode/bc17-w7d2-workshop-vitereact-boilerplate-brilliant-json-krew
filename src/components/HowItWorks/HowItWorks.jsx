import React from 'react';
import './styles.module.css';
import ArticleComponent from './Article/ArticleComponent';

export default function HowItWorks() {
  return (
    <div>
      <main>
        <section className="hero">
        <article class ="tiles">
            <img class="how-it-works" src="src/assets/hero-mobile.png" alt="phonecall" />
            <h3>Give us a call...</h3>
            <p>Call us and book in a "design consultation" on a date and time that suits you.</p>
        </article>
          <article className="text_bgColor">
            <h1 className="hero-heading">
              Discover the <br />
              Perfect Fireplace ...
            </h1>
            <h2 className="Text_phoneNumber">
              Book consultation:
              <span className="phoneNumber"> 0121 345 6789</span>
            </h2>
          </article>
        </section>
        <section className="how-it-works-container">
          <h2>How is works</h2>
          <ArticleComponent/>
          <article className="tiles">
            <img
              className="how-it-works"
              src="src/assets/how-it-works-2.png"
              alt="home visit"
            />
            <h3>We come to you...</h3>
            <p>
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
          </article>
          <article className="tiles">
            <img
              className="how-it-works"
              src="src/assets/how-it-works-3.png"
              alt="recommendation"
            />
            <h3>We recommend...</h3>
            <p>We send you a bespoke set of fireplace recommendations.</p>
          </article>
        </section>
      </main>
    </div>
  );
}
