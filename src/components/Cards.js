import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check Out This Destination!</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    <CardItem
                    src='C:\Users\namit\Desktop\rEACT\reactwebsit\public\images\2151158509.jpg'
                    text='something'
                    label='Adventure'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
         
      
    </div>
  )
}

export default Cards

