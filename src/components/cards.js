import React from 'react';
import './cards.css';
import CardItem from './carditem';
import Waterfall from '../images/waterfall.jpg'
import Sahara from '../images/sahara.jpg'
import Himalaya from '../images/himalaya.jpg'
import Island from '../images/island.jpg'
import Sky from '../images/sky.jpg'
import Untouched from '../images/untouched.jpg'


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out New Adventures</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Waterfall}
              text='Visit the waterfall deep inside the Amazon'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Island}
              text='Travel through the Islands covered in oceans'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Sky}
              text='Warm Your Eyes By the spectacular sky'
              label='Luxury'
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Untouched}
              text='Set Sail in the Oceans visiting Untouched lands'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src={Himalaya}
              text='Experience the Peak of the Himilayan Mountains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src={Sahara}
              text='Ride through the Sands of the Sahara Desert'
              label='Mystery'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;