import { useState } from 'react'
import Project from './components/Project.jsx'
import NavBar from './components/NavBar.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
  {/* header */}
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
    {/* Project Start */}
    <div className="row no-gutter">
      <Project projectTitle  = "The Pickrick Protests" projectUrl = "./project-info/pickrick-info.html" imageUrl = "./img/pickrick/Pickrick.jpeg" projectType = "AR"/>

      <Project projectTitle  = "Let's Build!" projectUrl = "./project-info/letsbuild-info.html" imageUrl = "./img/letsbuild/letsbuild.png" projectType = "AR"/>

      <Project projectTitle  = "The Georgia Tech Archives" projectUrl = "./project-info/archives-info.html" imageUrl = "./img/archives/old_campus.jpg" projectType = "VR"/>

      <Project projectTitle  = "Modeling The Hive" projectUrl = "./project-info/hive-info.html" imageUrl = "/img/hive/hive.png" projectType = "VR"/>

      <Project projectTitle  = "McCloud Pyramid" projectUrl = "./project-info/mccloud-info.html"  imageUrl = "./img/mccloud/hubs.png" projectType = "AR"/>

      <Project projectTitle  = "Art" projectUrl = "./project-info/art-info.html"  imageUrl = "./img/art/art.jpg" projectType = "Mixed Media"/>
    </div>
    <div className="mt-5" />
  </div>
</>
  )
}

export default App
