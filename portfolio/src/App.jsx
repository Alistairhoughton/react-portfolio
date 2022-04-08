import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Fade from './Fade'
import './Fade.css'



function App() {
  return (
    <div className="App">
      <Navbar  />     
      <Hero className="panel" data-color="blue" />
      <Portfolio className="panel" data-color="green"  />
      <About />
      <Contact />
    </div>
  );
}

export default App;
