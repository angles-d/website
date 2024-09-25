import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
        return (
                <div className="nav-bar flex justify-end my-10">
                        <Link to="/">Home</Link>
                        <HashLink to="/#projects">Projects</HashLink>
                        <Link to="/about-me">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="/website/Dai_Resume.pdf" target="_blank">Resume</a>
                </div>)

}