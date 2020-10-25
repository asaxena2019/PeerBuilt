// import React from 'react';
// import '../../App.css';

// export default function Services() {
//   return <h1 className='services'>SERVICES</h1>;
// }

// import React from 'react';
// import '../../App.css';

// export default function Products() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Services() {
  return (
     
    <>
      <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h4>Showcase Your Proudest Work and<br/>Find Your Peers' Fascinating Projects!</h4><br/>
      <p>What are you waiting for?</p>

      <div className='hero-btns'>
        <Link to='/productivity'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Productivity
        </Button>
        </Link>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Academic
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Entertainment
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Social
        </Button>
      </div>
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Services;