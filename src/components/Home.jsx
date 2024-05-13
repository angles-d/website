import { useState } from 'react'
import NavBar from './NavBar.jsx'

function Project(props){
  return (
      <div className="square col-6 mb-4">
          <a
          href={props.projectUrl}
          className="square-wrap fancybox"
          >
          <div className="info">
              <h3>{props.projectTitle}</h3>
              <span>{props.projectType}</span>
          </div>
          <img className="img-fluid" src={props.imageUrl} />
          </a>
    </div>

  )
}

export default function Home() {
  return (
    <>
  <div className="container">
    <NavBar/>
    <div className="mt-5 row">
      <div className="col">
        <h2
          style={{
            fontFamily: '"Inconsolata", monospace',
            opacity: 1,
            fontSize: 36,
            fontWeight: 600
          }}
        >
          Hey, I'm Angela
        </h2>
      </div>
    </div>
  </div>
  
  <div id="projects" className="container">
    <div className="mt-5" />
    <div className="mt-5 mb-1 row">
      <div className="col-12">
        <h3
          style={{
            fontFamily: '"Inconsolata", monospace',
            opacity: "0.6",
            fontSize: 20,
            fontWeight: 600
          }}
        >
          PROJECTS
        </h3>
      </div>
    </div>
    <div className="row no-gutter">
      <Project projectTitle  = "The Pickrick Protests" projectUrl = "./project/pickrick-protests" imageUrl = "./src/assets/img/pickrick/Pickrick.jpeg" projectType = "AR"/>

      <Project projectTitle  = "Let's Build!" projectUrl = "./project/lets-build" imageUrl = "./src/assets/img/letsbuild/letsbuild.png" projectType = "AR"/>

      <Project projectTitle  = "The Georgia Tech Archives" projectUrl = "project/archives" imageUrl = "./src/assets/img/archives/old_campus.jpg" projectType = "VR"/>

      <Project projectTitle  = "Modeling The Hive" projectUrl = "./project/hive" imageUrl = "./src/assets/img/hive/hive.png" projectType = "VR"/>

      <Project projectTitle  = "McCloud Pyramid" projectUrl = "./project/mccloud"  imageUrl = "./src/assets/img/mccloud/hubs.png" projectType = "AR"/>

      <Project projectTitle  = "Animation Class Projects" projectUrl = "./project/animation-projects"  imageUrl = "./src/assets/img/art/art.jpg" projectType = "Animation"/>

      <Project projectTitle  = "Art" projectUrl = "./art"  imageUrl = "./src/assets/img/art/art.jpg" projectType = "Mixed Media"/>
      
      
    </div>
    <div className="mt-5" />
  </div>
</>
  )
}

