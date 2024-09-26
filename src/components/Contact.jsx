import { useState } from 'react'
import NavBar from './NavBar.jsx'
import linkedInImg from "../assets/img/logo/linkedin_black.png"
import envImg from "../assets/img/logo/env_black.png"

export default function Contact() {
  return (
    <>
      <div className="container mx-auto w-9/12 h-screen">
        <div className='flex flex-col  h-full'>
          <NavBar />
          <div className='flex-grow flex'>
            <div className="grid grid-cols-2 gap-24 content-center mx-auto pb-36">
              <div className="justify-self-end">
                <h1 className="text-5xl contact pb-2">Get in touch!</h1>
                <p className='text-2xl'>Please feel free to connect me!</p>
              </div>
              <div className="">
                <div className="flex items-center ">
                  <img className="w-1/6 mr-6" src={envImg} />
                  <a className="contact" href="mailto:adai24@gatech.edu">adai24@gatech.edu</a>
                </div>
                <br />
                <div className="flex items-center">
                  <img className="w-1/6 mr-6" src={linkedInImg} />
                  <a className="contact" href="https://www.linkedin.com/in/adai24/" target='_blanks'>https://www.linkedin.com/in/adai24/</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

