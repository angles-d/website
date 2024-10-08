import ProjectPage from "../ProjectPage.jsx";
import VideoCarousel from "../VideoCarousel.jsx";

import video from "../../assets/img/pickrick/pillar_activists.mp4";
import pillarScanning from "../../assets/img/pickrick/pillar_scanning.mp4";
import wallVid from "../../assets/img/pickrick/wall.mp4";


import crowdVid from "../../assets/img/pickrick/crowds_animation.mp4";
import demoImg from "../../assets/img/pickrick/demo.png";
import ecoImg from "../../assets/img/pickrick/ecocommons.png";
import cafeImg from "../../assets/img/pickrick/pickrick_cafe.jpeg";
import demoVid from "../../assets/img/pickrick/demo_vid.mp4";
import usertest1 from "../../assets/img/pickrick/usertest1.jpg";
import usertest2 from "../../assets/img/pickrick/usertest2.jpeg";
import usertest3 from "../../assets/img/pickrick/usertest3.png";

let videos = [
  wallVid,
  video,
  pillarScanning
]

let content = (<>
  <p>
    The Pickrick project is an interactive location-based AR installation that
    recreates the 1965 Atlanta Pickrick Protests produced by{" "}
    <a href="https://dilac.iac.gatech.edu/">GT DILAC</a>.
  </p>
  <video
    className="img-project w-3/4 my-4"
    src={demoVid}
    alt="Seam Carving visualized with red seams"
    autoPlay
    loop
    controls
  />
  <p>
    After the passing of the Civil Rights Act, three African American activists,
    Charles Wells, Albert Dunn, and Woodrow Willis, were denied entry to the
    Pickrick restaurant. This restaurant was owned by Lester Maddox, a
    segregationist and future governor of Georgia. In response these activists
    launched a series of protests to which Maddox responded with violence and
    refused to integrate The Pickrick. These events became the basis for the one
    of the first law suits filed under the Civil Rights Act by the NAACP.
  </p>
  <img
    className="img-project m-4"
    src={cafeImg}
  />
  <p /> In 1966 after it closed, Georgia Tech purchased the restaurant. The
  building was later demolished in 2008, Tech demolished to build a green space.
  At the site now stands a memorial plaza to the protests.
  <p />
  <img className="img-project m-4 mb-10" src={ecoImg} />
  {/* Development */}
  <h3 className="my-2">Design & Development </h3>
  <p >
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
  </p>
  <br></br>
  <p>
    For this project, we really wanted to explore the capabilities of AR as a
    storytelling media. We had 2 main goals: reduce the reliance on traditional
    2D UI, and take advantage of the physical space.
  </p>
  <br></br>
  <p className="mb-1 text-lg">My responsibilities:</p>
  <ul className="list-disc ml-4">
    <li>Collaborating with the design team and historians</li>
    <li>Offering AR technical guidance to ensure feasibility</li>
    <li>
      Implementing the experience using ARFoundation, C#, Unity, and Blender
    </li>
    <li>
      Managing the development team and coordinating with various stakeholders
    </li>
  </ul>

  <div className="mb-10" />

  {/* User Testing */}
  <h3 className="my-2">Tailoring content for AR </h3>
  <p>
    For the experience we wanted to avoid using 2D screen formats as that would
    defeat the purpose of AR aspect. However, we still had to convey a lot of
    historical context to the user. To address this challenge, the design team
    created historical cards that could be digitally overlayed on the plaza's
    architecture. By anchoring these cards physically to planes instead of using
    a HMD screen, we were able to reduce the text jitter/movement and create a
    better reading experience for the user. I implemented this interaction using
    colliders to determine the user's position and AR raycasts to detect and
    track the physical planes.
  </p>
  {/* AR UI slideshow */}
  <VideoCarousel videos={videos} />


  {/* ending ar ui slideshow */}
  <div className="mb-10" />
  {/* User Testing */}
  <h3 className="my-2"> 3D Animation</h3>
  <p>
    We also recreated the events from the protests' video footage into 3D
    animations. With these 3D recreations, users can relive the experience
    themselves and explore the event from any location. Since Georgia Tech owns
    the land where the events occurred, we are able to superimpose these
    animations onto the original locations, effectively bringing the past back
    into the present. The 3D models create a sense of presence to the historical
    scene that cannot be fully captured by videos or pictures. When exploring
    the scene below, user testers described the crowd as "claustrophobic" and
    some even became uncomfortable as they had to "push" their way through it.
  </p>
  <div className=" my-4">
    <video
      className="w-10/12 mx-auto "
      controls
    >
      <source type="video/mp4" src={crowdVid} />

    </video>
    <p className="text-sm  div-caption text-center mt-2">
      For the full experience play with the sound on.
    </p>
  </div>

  <p>
    {" "}
    The AR format also allows the use of 3D audio and sound design. By using the
    actual audio of the events, we can increase the user's sense of immersion in
    the experience. The use of audio also helped us to convey additional aspects
    of the story, reducing the need for additional text and the reliance on 2D
    screen content.{" "}
  </p>
  <div className="mb-10" />
  {/* User Testing */}
  <h3 className="my-2">User Testing </h3>
  <p>
    During user testing, many users stated that they enjoyed the sense of agency
    that AR gave them and were surprised by how immersive the experience was.
    Many stated that the the ability to move around the AR recreations was their
    favorite part of the app.{" "}
  </p>
  <div className="flex items-center gap-3 my-4">
    <img
      className="w-1/3 aspect-[3/4] object-cover"
      src={usertest1}
    />
    <img
      className="w-1/3 aspect-[3/4] object-cover"
      src={usertest3}
    />
    <img
      className="w-1/3 aspect-[3/4] object-cover"
      src={usertest2}
    />
  </div>
  <p>
    I was surprised by their level of immersion as we were only using an ipad to
    run the application. We decided to use mobileAR to increase the app's
    accessibility, but believed that we were sacrificing some of the complete
    immersion offered by a headset experience. Despite the ability to see around
    the ipad, the users seemed to concentrate on the screen and disregard their
    surroundings, like when you watch a movie. During testing, we often had to
    steer users away from the trees and lampposts as they would walk right into
    them while exploring the site.
  </p>
  <div className="mb-10" />
  {/* Conclusion */}
  <h3 className="my-2">Conclusion </h3>
  <p>
    This project has given me the opportunity to explore diverse AR problem
    spaces and engage in compelling discussions around nonlinear storytelling,
    user agency, and spatial design. I learned that AR storytelling requires a
    unique approach that differs from traditional media. We cannot simply adapt
    the formats of traditional media to AR, but rather need to approach
    development in an AR-centric manner. While the AR format may not be suitable
    for all stories, it can greatly elevate the user's emotional experience and
    understanding of the right ones.
  </p>
  <img className="img-project mt-4 mb-24" src={demoImg} />
</>)

let team = [
  "Janet Murray (Executive Producer)",
  "Angela Dai (Lead Programmer & PM)",
  "Joy Dang (Programmer)",
  "Adithya Chimalakonda (Animator)",
  "Yuchen Zhao (UX Researcher & PM)",
  "Brandy Pettijohn (Historical Researcher)"]

const pageInfo = {
  teamList: team,
  projectTitle: "The Pickrick Protests",
  date: "2021-2024",
  projectType: "AR",
  toolsUsed: "C#, Unity, Blender",
  content: content,
  links: [["Github", "https://github.com/angles-d/Pickrick_Unity"],
  ["Visit the Website", "https://sites.gatech.edu/pickrickproject/"]]
}

export default function PickrickInfo() {


  return (
    < ProjectPage props={pageInfo} />
  )
}