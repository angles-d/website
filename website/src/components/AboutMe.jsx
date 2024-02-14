import { useState } from 'react'
import NavBar from './NavBar.jsx'

export default function AboutMe() {
  return (
    <>
    <div className="container">
    <NavBar/>
    <div className="mt-5 mb-5 row"></div>
        <div className="row mb-5">
            <div className="col-6">
                <h2 className="mb-4">About Me</h2>
                <p>👋 Hey I'm Angela. I'm a third-year Computer Science major at Georgia Tech
                    concentrating in media and intelligence and will be studying for a masters in computer Graphics next semester. I'm interested in the
                    intersection between art and tech and how we can use it to produce novel creative experiences. I'm currently looking for a full time position.
                </p>
                <p className="mb-3">In my free time, I enjoy drawing, listening to podcasts, and
                    baking any bread that isn't sourdough.
                </p>
                <p className="mb-5" >
                  <a href="./Dai_Resume.pdf" className="readmore" download>Download my Resume</a>
                </p>
                <div style={{"opacity": "0.75"}}>
                    <p className="mb-1">Find me on:</p>
                    <a href="https://www.linkedin.com/in/adai24/" className="readmore">Linkedin</a>
                    <a href="https://github.com/angles-d" className="readmore">Github</a>
                </div>
            </div>
            <div className="col-5 offset-1">
                <img className="img-fluid" src="./src/assets/img/profile-blob.png"/>
            </div>
        </div>
        </div>
        </>
  )
}

