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
import AnimationProjectsPage from "./components/projectPages/AnimationProjects.jsx"
import CompGraphicsProjectsPage from "./components/projectPages/ComputerGraphicsProjects.jsx"
import CompPhotographyPage from './components/projectPages/CompPhotographyProjects.jsx';

import { HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (<>
    <HashRouter basename={""}>
      <Routes>
        {/* NavBar */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about-me" element={<AboutMe />} />

        {/* project pages */}
        <Route exact path="project/archives" element={<ArchivesPage />} />
        <Route exact path="project/pickrick-protests" element={<PickrickPage />} />
        <Route exact path="/art" element={<ArtPage />} />
        <Route exact path="project/mccloud" element={<McCloudPage />} />
        <Route exact path="project/hive" element={<HivePage />} />
        <Route exact path="project/lets-build" element={<LetsBuildPage />} />
        <Route exact path="project/animation-projects" element={<AnimationProjectsPage />} />
        <Route exact path="project/computer-graphics-projects" element={<CompGraphicsProjectsPage />} />
        <Route exact path="project/comp-photography-projects" element={<CompPhotographyPage />} />
      </Routes>
    </HashRouter>
  </>

  )
}

export default App
