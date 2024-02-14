import { useState } from 'react'
import NavBar from './NavBar.jsx'

export default function Contact() {
  return (
    <>
  <div className="container">
    <NavBar/>
  </div>
  <div className="mt-4 row"></div>
  <div className="mt-5 mb-5 row"></div>
  <div className="col-6 offset-1">
    <br/>
    <div className="row mt-4 d-flex align-items-center">
        <img className="col-2" style={{"maxWidth": "80%", "height":"auto"} } src="./src/assets/img/logo/env_black.png"/>
        <a className="contact" href="mailto:adai24@gatech.edu">adai24@gatech.edu</a> 
    </div>
    <br/>
    <div className="row  d-flex align-items-center">
        <img className="col-2"  src="./src/assets/img/logo/linkedin_black.png" style= {{"maxWidth":"20%", "height":"auto"}}/>
        <a className="contact" href="https://www.linkedin.com/in/adai24/">https://www.linkedin.com/in/adai24/</a> 
    </div>
    <div className="mt-5" />
    </div>
    </>
  )
}

