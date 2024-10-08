import NavBar from './NavBar.jsx'
import profile from "../assets/img/profile-blob.png"

export default function AboutMe() {
    return (
        <div className="container mx-auto w-9/12 ">
            <NavBar />
            <div className="grid grid-cols-5 gap-12 mt-24 items-center">
                <div className="col-span-3 mr-3 ">
                    <h1 className="mb-8 text-4xl">About Me</h1>
                    <p className=''>
                        I'm a new grad from Georgia Tech with a masters in Computer Science. I'm interested in the
                        intersection between art and tech and how we can use it to produce novel creative experiences.
                        I've interned at companies such as the New York Times, NASA and Georgia Tech. I'm currently looking for a full time position.
                    </p>
                    <p className="my-6">In my free time, I enjoy drawing, listening to podcasts, and trying new recipes.
                    </p>
                    <p className="mb-6" >
                        <a href="./Dai_Resume.pdf" className="readmore" download>Download my Resume</a>
                    </p>
                    <div >
                        <p className="mb-1 ">Find me on:</p>
                        <a href="https://www.linkedin.com/in/adai24/" target="_blanks" className="readmore mr-2">Linkedin</a>
                        <a href="https://github.com/angles-d" className="readmore mr-2">Github</a>
                    </div>
                </div>
                <div className="col-span-2">
                    <img className="w-full h-auto" src={profile} />
                </div>
            </div>
        </div>
    )
}

