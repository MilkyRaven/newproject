import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

function Header() {
  return (
    <div className='project__header section_padding id="home'>
      <div className='project__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open AI</h1>
        <p>Lorem Ipsum blabla...</p>
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