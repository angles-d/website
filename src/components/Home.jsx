import { useState } from "react";
import NavBar from "./NavBar.jsx";

// Importing images
import pickrickImage from "../assets/img/pickrick/Pickrick.jpeg";
import letsbuildImage from "../assets/img/letsbuild/letsbuild.png";
import archivesImage from "../assets/img/archives/old_campus.jpg";
import hiveImage from "../assets/img/hive/hive.png";
import mccloudImage from "../assets/img/mccloud/hubs.png";
import animationImage from "../assets/img/animation/mocap_walking.gif";
import compGraphicsImage from "../assets/img/compGraphics/sphere.png";
import artImage from "../assets/img/art/art.jpg";

function Project(props) {
  return (
    <div className="">
      <a href={props.projectUrl} className="block relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h3 className="text-xl font-semibold">{props.projectTitle}</h3>
            <span className="text-sm">{props.projectType}</span>
          </div>
        </div>
        <img
          className="w-full h-auto"
          src={props.imageUrl}
          alt={props.projectTitle}
        />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto w-10/12">
      <NavBar />

      <h2 className="text-4xl font-semibold opacity-100 my-12">
        Hey, I'm Angela
      </h2>


      <div id="projects" className="my-20">
        <h3 className=" text-xl font-semibold opacity-90 mb-4 row-start-1">
          PROJECTS
        </h3>
        <div className="grid grid-cols-2 gap-8  mx-auto">

          <Project
            projectTitle="Graphics Class Projects"
            projectUrl="./#/project/computer-graphics-projects"
            imageUrl={compGraphicsImage}
            projectType="Computer Graphics"
            className="row-start-2"
          />
          <Project
            projectTitle="Animation Class Projects"
            projectUrl="./#/project/animation-projects"
            imageUrl={animationImage}
            projectType="Animation"
          />
          <Project
            projectTitle="The Pickrick Protests"
            projectUrl="./#/project/pickrick-protests"
            imageUrl={pickrickImage}
            projectType="AR"
          />
          <Project
            projectTitle="Let's Build!"
            projectUrl="./#/project/lets-build"
            imageUrl={letsbuildImage}
            projectType="AR"
          />
          <Project
            projectTitle="The Georgia Tech Archives"
            projectUrl="./#/project/archives"
            imageUrl={archivesImage}
            projectType="VR"
          />
          <Project
            projectTitle="Modeling The Hive"
            projectUrl="./#/project/hive"
            imageUrl={hiveImage}
            projectType="VR"
          />
          <Project
            projectTitle="McCloud Pyramid"
            projectUrl="./#/project/mccloud"
            imageUrl={mccloudImage}
            projectType="AR"
          />
          <Project
            projectTitle="Art"
            projectUrl="./#/art"
            imageUrl={artImage}
            projectType="Mixed Media"
          />
        </div>
      </div>
    </div>
  );
}
