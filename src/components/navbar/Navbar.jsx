import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

import plexi from '../../assets/plexi.png';

//check BEM -> Blocl Element Modifier
const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wproject'>What is GPT3?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='project__navbar'>
      <div className='project__navbar-links'>
        <div className='project__navbar-links_logo'>
          <img src={plexi} alt="logo" />
        </div>
        <div className='project__navbar-links_container'>
          <Menu />
        </div>
        <div className='project__navbar-sign'>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
        <div className='project__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}></RiCloseLine>
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}></RiMenu3Line>
          }
          {toggleMenu && (
            <div className='project__navbar-menu_container scale-up-br'>
              <div className='project__navbar-menu_container-links'>
                <Menu />
                <div className='project__navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar