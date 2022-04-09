import React from 'react';
import './App.css';
import'./components/Fade.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import FadeLogic from './components/Fade'




function App() {
  return (
    <div className="App">
      <Navbar  />     
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
