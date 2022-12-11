import React from 'react';
import './what.css';
import Feature from '../../components/feature/Feature' 

function What() {
  return (
    <div className='project__what section__margin' id="what">
      <div className='project__what-feature'>
        <Feature />
      </div>
      <div className='project__what-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
      </div>
      <div className='project__what-container'>
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default What