import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import NavBar from "./NavBar.jsx";
import { Button } from "./ui/button.jsx";

// Importing images
import animationImage from "../assets/img/animation/mocap_walking.gif";
import archivesImage from "../assets/img/archives/old_campus.jpg";
import artImage from "../assets/img/art/art.jpg";
import compGraphicsImage from "../assets/img/compGraphics/sphere.png";
import compPhotImage from "../assets/img/compPhotography/conway_slow.mp4";
import hiveImage from "../assets/img/hive/hive.png";
import letsbuildImage from "../assets/img/letsbuild/letsbuild.png";
import mccloudImage from "../assets/img/mccloud/hubs.png";
import pickrickImage from "../assets/img/pickrick/Pickrick.jpeg";

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
	const deleteDelay = 35;
	const wordDelay = 2000;

	useEffect(() => {
		const handleFocus = () => {
			setIsPlaying(true)
		}

		const handleBlur = () => {
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

			<p className="mb-8 w-7/12 text-lg"> I'm a programmer interested in how we can use tech to produce novel user experiences. I've interned at companies such as the New York Times, NASA and Georgia Tech. Currently looking for fulltime roles.
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
						<span className="text-sm capitalize">{props.projectType}{props.language ? " | " + props.language : ""} </span>
					</div>
				</div>

				{props.imageUrl.slice(-3) != "mp4" ?
					< img
						className="w-full h-auto aspect-video"
						src={props.imageUrl}
						alt={props.projectTitle}
					/>
					: <video
						className="w-full h-auto"
						src={props.imageUrl}
						alt={props.projectTitle}
						autoPlay
						loop
						muted
					/>
				}
			</a>
		</div>
	);
}

const projectList = [
	{
		projectTitle: "Computer Graphics Projects",
		projectUrl: "./#/project/computer-graphics-projects",
		imageUrl: compGraphicsImage,
		projectType: "class",
		projectAttrs: ["class", "graphics"],
		language: "Java",
	},
	{
		projectTitle: "Animation Projects",
		projectUrl: "./#/project/animation-projects",
		imageUrl: animationImage,
		language: "Python",
		projectAttrs: ["class", "graphics"],
		projectType: "class"
	},
	{
		projectTitle: "Computational Photography Projects",
		projectUrl: "./#/project/comp-photography-projects",
		imageUrl: compPhotImage,
		language: "Python",
		projectAttrs: ["class", "graphics"],
		projectType: "class"
	},
	{
		projectTitle: "The Pickrick Protests",
		projectUrl: "./#/project/pickrick-protests",
		imageUrl: pickrickImage,
		language: "C#",
		projectAttrs: ["XR"],
		projectType: "XR"
	},
	{
		projectTitle: "Let's Build!",
		projectUrl: "./#/project/lets-build",
		imageUrl: letsbuildImage,
		language: "C#",
		projectAttrs: ["XR"],
		projectType: "XR"
	},
	{
		projectTitle: "Modeling The Hive",
		projectUrl: "./#/project/hive",
		imageUrl: hiveImage,
		language: "C#, Blender",
		projectAttrs: ["XR", "graphics"],
		projectType: "XR"
	},
	{
		projectTitle: "McCloud Pyramid",
		projectUrl: "./#/project/mccloud",
		imageUrl: mccloudImage,
		language: "JS",
		projectAttrs: ["XR"],
		projectType: "XR"
	},
	{
		projectTitle: "Art",
		projectUrl: "./#/art",
		imageUrl: artImage,
		projectAttrs: [],
		language: "",
		projectType: "Mixed Media"
	}
];


const filters = ["all", "class", "graphics", "XR"]

export default function Home() {
	const [filter, setFilter] = useState("all");
	return (
		<div className="container mx-auto w-9/12 ">
			<NavBar />
			<Name />
			<div id="projects" className="pb-16">
				<div className="flex items-center">
					<p className="text-3xl my-6">Projects</p>
					<NavigationMenu className="z-30 mx-4 ">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="capitalize bg-transparent">{filter}</NavigationMenuTrigger>
								<NavigationMenuContent>
									{filters.filter(f => f != filter).map((f, i) => {
										return <Button key={i} variant="link" className="capitalize ml-1 mr-2" onClick={() => {
											setFilter(f)
										}}>{f}</Button>
									})}
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>

				<div className="grid grid-cols-2 gap-8  mx-auto">
					{projectList.filter((p) => filter == 'all' ? p : p.projectAttrs.includes(filter)).map((project, index) => (
						<Project
							key={index}
							projectTitle={project.projectTitle}
							projectUrl={project.projectUrl}
							imageUrl={project.imageUrl}
							language={project.language}
							projectType={project.projectType}
							className={project.className}
						/>
					))}
				</div>
			</div>
		</div >
	);
}
