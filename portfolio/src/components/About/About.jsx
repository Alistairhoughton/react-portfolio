import React from 'react'
import AboutStyles from './About.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCss3, faHtml5, faJs, faNodeJs, faReact} from '@fortawesome/free-brands-svg-icons';




export default function About() {
  return (
    <section className='about-container'>
      <div className='about-content-holder'>
        <h2 className='about-title'>About</h2>
      <p className='about-me'>Hi, my name's Alistair Houghton. I'm a fullstack developer who enjoys a challenge 
      and building flashy apps. Having a great passion for all things frontend. But fully  capable of implementing backend solutions.</p>
      <p className='skills'>
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faNodeJs}/>
        <FontAwesomeIcon icon={faReact}/>
      </p>
      </div>
    </section>
  )
}
