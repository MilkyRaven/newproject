import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='project__header section_padding id="home'>
      <div className='project__header-content'>
        <h1 className='gradient__text'>A complete high-performance Python robotics kit</h1>
        <p>Build your own robot with this Raspberry Pi kit, powered by a Cortex-M4 microcontroller. It’s designed to be easy to use and configurable. This kit comes preloaded with Python software you can use to build a robot of your choice. </p>
        <div className='project__header-content__input'>
          <input type="email" placeholder='Your Email Address'></input>
          <button type="button">Get Started</button>
        </div>
        <div classname="project__header-content__people">
          <img id="people" src={people} alt="people" />
          <p>1.600 people requested access</p>
        </div>
      </div>
      <div className='project__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header