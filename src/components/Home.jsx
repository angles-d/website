import { useState, useEffect } from "react";
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
import compPhotImage from "../assets/img/compPhotography/comp_phot.gif"

const words = ["ngela",
	" Cat Photographer",
	"ngela",
	" Programmer",
	" Bread Enthusiast",
	"n Animation Lover",
]

function Name(props) {
	const [wordIndex, setWordIndex] = useState(0);
	const [text, setText] = useState('');
	const [isPlaying, setIsPlaying] = useState(true);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const typeDelay = 50;
	const deleteDelay = 25;
	const wordDelay = 1000;

	useEffect(() => {
		const handleFocus = () => {
			console.log("window is focused");
			setIsPlaying(true)
		}

		const handleBlur = () => {
			console.log("window is blurred");
			setIsPlaying(false)
			setWordIndex(0);
			setCharIndex(0);
			setText('');
			setIsDeleting(false)
		}

		window.addEventListener("focus", handleFocus, false);
		window.addEventListener("blur", handleBlur, false);

		return () => {
			window.removeEventListener("focus", handleFocus);
			window.removeEventListener("blur", handleBlur);
		};

	}, [])


	useEffect(() => {
		if (isPlaying) {
			let timeout;
			if (!isDeleting) {
				if (charIndex < words[wordIndex].length) {
					timeout = setTimeout(() => {
						setText(prevText => prevText + words[wordIndex][charIndex]);
						setCharIndex(prevIndex => prevIndex + 1);
					}, typeDelay);
				} else {
					timeout = setTimeout(() => {
						setIsDeleting(true)
					}, wordIndex ? wordDelay : wordDelay + 1000);
					setWordIndex((wordIndex + 1) % words.length)
				}

			} else if (isDeleting) {
				if (charIndex > 0) {
					timeout = setTimeout(() => {
						setCharIndex(prevIndex => prevIndex - 1);
						setText(prevText => prevText.slice(0, charIndex - 1));
					}, deleteDelay);
				} else {
					setIsDeleting(false)
				}

			}
			return () => clearTimeout(timeout);
		}
	}, [charIndex, isDeleting, isPlaying]);

	return (
		<div className="mt-48 mb-36">
			<div className="text-5xl mt-16 mb-8 flex"
			>
				<h1 >Hey, I'm A</h1>
				<h1 className="whitespace-pre">{text}</h1>
			</div>

			<p className="mb-8 w-7/12 text-lg"> I'm a programmer interested in the intersection between art and tech and how we can use it to produce novel creative experiences. Currently looking for fulltime roles.
			</p>

			<p className="mb-6" >
				<a className="contact underline mr-4" href="mailto:adai24@gatech.edu" >adai24@gatech.edu</a>
				<a href="./Dai_Resume.pdf" className="mr-4 underline" download>Resume</a>
			</p>
		</div >);
}

function Project(props) {
	return (
		<div className="">
			<a href={props.projectUrl} className="block relative overflow-hidden">
				<div className="absolute inset-0 bg-black bg-opacity-40 z-10 opacity-0 transition-opacity duration-300 hover:opacity-100">
					<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
						<h3 className="text-xl font-medium">{props.projectTitle}</h3>
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
		<div className="container mx-auto w-9/12">
			<NavBar />
			<Name />
			<div id="projects" className="">
				<p className="text-3xl py-6">Projects</p>
				<div className="grid grid-cols-2 gap-8  mx-auto">

					<Project
						projectTitle="Computer Graphics Projects"
						projectUrl="./#/project/computer-graphics-projects"
						imageUrl={compGraphicsImage}
						projectType="Class | Java"
						className="row-start-2"
					/>
					<Project
						projectTitle="Animation Projects"
						projectUrl="./#/project/animation-projects"
						imageUrl={animationImage}
						projectType="Class | Python"
					/>
					<Project
						projectTitle="Computational Photography Projects"
						projectUrl="./#/project/comp-photography-projects"
						imageUrl={compPhotImage}
						projectType="Class | Python"
					/>
					<Project
						projectTitle="The Pickrick Protests"
						projectUrl="./#/project/pickrick-protests"
						imageUrl={pickrickImage}
						projectType="AR | C#"
					/>

					<Project
						projectTitle="The Georgia Tech Archives"
						projectUrl="./#/project/archives"
						imageUrl={archivesImage}
						projectType="VR | C#"
					/>
					<Project
						projectTitle="Let's Build!"
						projectUrl="./#/project/lets-build"
						imageUrl={letsbuildImage}
						projectType="AR | C#"
					/>
					<Project
						projectTitle="Modeling The Hive"
						projectUrl="./#/project/hive"
						imageUrl={hiveImage}
						projectType="VR | Blender & C#"
					/>
					<Project
						projectTitle="McCloud Pyramid"
						projectUrl="./#/project/mccloud"
						imageUrl={mccloudImage}
						projectType="AR | JS"
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
