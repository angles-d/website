import {  Link } from "react-router-dom";

export default function NavBar(){
    return (<>
        <div className="mt-5 row align-items-center">
            <div className="col-6 offset-6 text-start text-lg-end  justify-content-end nav-bar  d-flex">
                <Link to="/">Home</Link>
                <Link to="projects">Projects</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/contact">Contact</Link>
                <a href="/website/Dai_Resume.pdf" className="pl-3" target="_blank">Resume</a>
            </div>
        </div>
    </>)

}