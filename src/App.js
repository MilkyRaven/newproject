import React from 'react'

import { Brand, Cta, Navbar } from './components';
import { Footer, Blog, Possibility, Features, What, Header } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <What></What>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App