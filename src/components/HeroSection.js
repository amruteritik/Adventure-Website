import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>THE ADVENTURE LAND</h1>
      <p>Jump into the Ocean of Adventure</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;