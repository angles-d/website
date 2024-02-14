import { Outlet, Link } from "react-router-dom";

export default function NavBar(){
    return (<>
        <div className="mt-5 row align-items-center">
            <div className="col-6 offset-6 text-start text-lg-end  justify-content-end nav-bar  d-flex">
                <Link to="/">Home</Link>
                <a href="/" className="pl-3">Projects</a>
                <a href="/about-me" className=" pl-3">About</a>
                <Link to="/contact">Contact</Link>
                <a href="./Dai_Resume.pdf" className="pl-3">Resume</a>
            </div>
        </div>
        <Outlet />
    </>)

}