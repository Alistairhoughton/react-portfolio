import React from 'react'
import ContactStyle from './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faDribbble, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Contact() {
  return (
    <section className='contact-container'>
    <div className='contact-content-holder'>
      <h2 className='contact-title'>Say hello!</h2>
    <p className='email-el'><a className='email-el' href="mailto:alistair.g.houghton@gmail.com">alistair.g.houghton@gmail.com</a></p>
    <p className='socials'>

      <a className='link-el' href="https://github.com/Alistairhoughton"><FontAwesomeIcon icon={faGithub} /></a>
      <a className='link-el' href="https://github.com/Alistairhoughton"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a className='link-el' href="https://github.com/Alistairhoughton"><FontAwesomeIcon icon={faBehance} /></a>
      <a className='link-el' href="https://github.com/Alistairhoughton"><FontAwesomeIcon icon={faDribbble} /></a>
      
    </p>
    </div>
  </section>
  )
}
