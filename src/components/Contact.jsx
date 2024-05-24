import { useState } from 'react'
import NavBar from './NavBar.jsx'
import linkedInImg from "../assets/img/logo/linkedin_black.png"
import envImg from "../assets/img/logo/env_black.png"

export default function Contact() {
  return (
    <>
      <div className="container">
        <NavBar/>
        <div className="mt-5 mb-4 row" />
      </div>
    <div className="container">
    <div className="mt-5  mb-5  row"></div>
    <div className="mt-4  mb-5  row"></div>

    <div className="row mt-5">
    <div className="col-4 offset-1 mt-4">
                <h1 className="contact">Get in touch!</h1>
                <p>Please feel free to connect with me on LinkedIn!</p>

            </div>
        <div className="col-6 offset-1">
          <div className="row mt-4 d-flex align-items-center">
              <img className="col-2" style={{"maxWidth": "80%", "height":"auto"} } src={envImg}/>
              <a className="contact" href="mailto:adai24@gatech.edu">adai24@gatech.edu</a> 
          </div>
          <br/>
          <div className="row  d-flex align-items-center">
              <img className="col-2"  src={linkedInImg} style= {{"maxWidth":"20%", "height":"auto"}}/>
              <a className="contact" href="https://www.linkedin.com/in/adai24/">https://www.linkedin.com/in/adai24/</a> 
          </div>
        </div>
       
      </div>
      </div>
       
        <div className="mt-5 mb-4 row" />
        <div className="mt-4  mb-5  row"></div>
        <div className="mt-4  mb-5  row"></div>
        <div className="mt-4  mb-5  row"></div>
        <div className="mt-4  mb-5  row"></div>
        <div className="mt-4  mb-5  row"></div>
        <div className="mt-4  mb-5  row"></div>
    
    </>
  )
}

