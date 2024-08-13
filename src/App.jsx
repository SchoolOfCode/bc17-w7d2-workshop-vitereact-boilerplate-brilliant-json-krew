// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import MainComponent from './components/Main/MainComponent';
import FooterComponent from './components/Footer/FooterComponent'

function App() {

  return (
    <>

     <HeaderComponent />
     <MainComponent/>
     <FooterComponent/>

      {/* <div class="wrapper">
        <header>
          <h1 class="Text_phoneNumber">🔥 Fireplace Palace</h1>
        </header>
        <main>
          <section class ="hero">
            <article>
                <img class="first-image" src="src/assets/hero-mobile.png" alt="fireplace"/>
            </article>
            <article class="text_bgColor">
                <h1 class="hero-heading">Discover the <br/>Perfect Fireplace ...</h1>
                <h2 class="Text_phoneNumber">Book consultation:<span class="phoneNumber"> 0121 345 6789</span></h2>
            </article>
          </section>
          <section class ="how-it-works-container">
            <h2>How is works</h2>           
              <article class ="tiles">
                <img class="how-it-works" src="src/assets/how-it-works-1.png" alt="phonecall" />
                <h3>Give us a call...</h3>
                <p>Call us and book in a "design consultation" on a date and time that suits you.</p>
              </article>
              <article class ="tiles">
                <img class="how-it-works" src="src/assets/how-it-works-2.png" alt="home visit" />
                <h3>We come to you...</h3>
                <p>We come to your home to do an assessment of the space and to your style preference.</p>
              </article>
              <article class ="tiles">
                <img class="how-it-works" src="src/assets/how-it-works-3.png" alt="recommendation" />
                <h3>We recommend...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
              </article>           
          </section>
        </main>
        <footer>
          <section class ="footer-container">
            <article>
              <p>Find us on:</p>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Ticktock</p>            
            </article>
              <p>copyright</p>
            <article>             
            </article>
          </section>
        </footer>
    </div> */}
   
    </>
  )
}

export default App
