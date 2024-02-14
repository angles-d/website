import { useState } from 'react'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx';
import AboutMe from './components/AboutMe.jsx';

import ArchivesPage from "./components/ArchivesPage.jsx"
import ArtPage from "./components/ArtPage.jsx"
import HivePage from "./components/HivePage.jsx"
import McCloudPage from "./components/McCloudPage.jsx"
import PickrickPage from "./components/PickrickPage.jsx"
import LetsBuildPage from "./components/LetsBuildPage.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
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
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
