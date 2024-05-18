import { useState } from 'react'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import AboutMe from './components/AboutMe.jsx';

import ArchivesPage from "./components/projectPages/ArchivesPage.jsx"
import ArtPage from "./components/projectPages/ArtPage.jsx"
import HivePage from "./components/projectPages/HivePage.jsx"
import McCloudPage from "./components/projectPages/McCloudPage.jsx"
import PickrickPage from "./components/projectPages/PickrickPage.jsx"
import LetsBuildPage from "./components/projectPages/LetsBuildPage.jsx"
import AnimationProjectsPage from "./components/projectPages/AnimationProjectsPage.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter basename={"/website/"}>
      <Routes>
        {/* NavBar */}
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-me" element={<AboutMe />} />
        
        {/* project pages */}
        <Route path="project/archives" element={<ArchivesPage />} />
        <Route path="project/pickrick-protests" element={<PickrickPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="project/mccloud" element={<McCloudPage />} />
        <Route path="project/hive" element={<HivePage />} />
        <Route path="project/lets-build" element={<LetsBuildPage />} />
        <Route path="project/animation-projects" element={<AnimationProjectsPage />} />
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
