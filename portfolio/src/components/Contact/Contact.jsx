import React from 'react'
import ContactStyle from './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faDribbble, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <section className='contact-container'>
    <div className='about-content-holder'>
      <h2 className='about-title'>Say Hello!</h2>
    <p className='email-el'><a className='email-el' href="alistair.g.houghton@gmail.com">alistair.g.houghton@gmail.com</a></p>
    <p className='skills'>

      <a className='link-el' href="www.google.com"><FontAwesomeIcon icon={faGithub} /></a>
      <a className='link-el' href="www.google.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a className='link-el' href="www.google.com"><FontAwesomeIcon icon={faBehance} /></a>
      <a className='link-el' href="www.google.com"><FontAwesomeIcon icon={faDribbble} /></a>
      
    </p>
    </div>
  </section>
  )
}
