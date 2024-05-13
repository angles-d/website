import ProjectPage from "../ProjectPage.jsx"
import Carousel from "../Carousel.jsx"

import wallVid from  "../../assets/img/pickrick/wall.mp4";
import video from  "../../assets/img/pickrick/pillar_activists.mp4";
import pillarScanning from "../../assets/img/pickrick/pillar_scanning.mp4";


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
  <img
    className="img-fluid pl-5 pr-5 mb-3"
    src="../src/assets/img/pickrick/pickrick_demo.gif"
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
    className="img-fluid pl-5 pr-5"
    src="../src/assets/img/pickrick/pickrick_cafe.jpeg"
  />
  <p /> In 1966 after it closed, Georgia Tech purchased the restaurant. The
  building was later demolished in 2008, Tech demolished to build a green space.
  At the site now stands a memorial plaza to the protests.
  <p />
  <img className="img-fluid pl-5 pr-5" src="../src/assets/img/pickrick/ecocommons.png" />
  <div className="mt-4 mb-4 row" />
  {/* Development */}
  <h3>Design & Development </h3>
  <p>
    {" "}
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
  </p>
  <p>
    For this project, we really wanted to explore the capabilities of AR as a
    storytelling media. We had 2 main goals: reduce the reliance on traditional
    2D UI, and take advantage of the physical space.
  </p>
  <p style={{ marginBottom: 2 }}>My responsibilities:</p>
  <ul>
    <li>Collaborating with the design team and historians</li>
    <li>Offering AR technical guidance to ensure feasibility</li>
    <li>
      Implementing the experience using ARFoundation, C#, Unity, and Blender
    </li>
    <li>
      Managing the development team and coordinating with various stakeholders
    </li>
  </ul>
  <div className="mt-2 mb-2 row" />

  {/* User Testing */}
  <h4>Tailoring content for AR </h4>
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
  <Carousel videos = {videos}/>
   

  {/* ending ar ui slideshow */}
  <div className="mt-2 mb-2 row" />
  {/* User Testing */}
  <h4>3D Animation</h4>
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
  <div className="row">
    <video
      className="col-4 col-md d-flex align-items-center justify-content-center"
      height={400}
      controls
      muted
    >
      <source type="video/mp4" src="../src/assets/img/pickrick/crowds_animation.mp4" />
    </video>
  </div>
  <p>
    {" "}
    The AR format also allows the use of 3D audio and sound design. By using the
    actual audio of the events, we can increase the user's sense of immersion in
    the experience. The use of audio also helped us to convey additional aspects
    of the story, reducing the need for additional text and the reliance on 2D
    screen content.{" "}
  </p>
  <div className="mt-4 mb-4 row" />
  {/* User Testing */}
  <h3>User Testing </h3>
  <p>
    During user testing, many users stated that they enjoyed the sense of agency
    that AR gave them and were surprised by how immersive the experience was.
    Many stated that the the ability to move around the AR recreations was their
    favorite part of the app.{" "}
  </p>
  <div className="row">
    <img
      className="col-4 col-md d-flex align-items-center justify-content-center"
      src="../src/assets/img/pickrick/usertest1.jpg"
    />
    <img
      className="col-4 col-md d-flex align-items-center justify-content-center"
      src="../src/assets/img/pickrick/usertest3.png"
    />
    <img
      className="col-4 col-md d-flex align-items-center justify-content-center"
      src="../src/assets/img/pickrick/usertest2.jpeg"
    />
  </div>
  <p>
    {" "}
    I was surprised by their level of immersion as we were only using an ipad to
    run the application. We decided to use mobileAR to increase the app's
    accessibility, but believed that we were sacrificing some of the complete
    immersion offered by a headset experience. Despite the ability to see around
    the ipad, the users seemed to concentrate on the screen and disregard their
    surroundings, like when you watch a movie. During testing, we often had to
    steer users away from the trees and lampposts as they would walk right into
    them while exploring the site.
  </p>
  <div className="mt-4 mb-4 row" />
  {/* Conclusion */}
  <h3>Conclusion </h3>
  <p>
    {" "}
    This project has given me the opportunity to explore diverse AR problem
    spaces and engage in compelling discussions around nonlinear storytelling,
    user agency, and spatial design. I learned that AR storytelling requires a
    unique approach that differs from traditional media. We cannot simply adapt
    the formats of traditional media to AR, but rather need to approach
    development in an AR-centric manner. While the AR format may not be suitable
    for all stories, it can greatly elevate the user's emotional experience and
    understanding of the right ones.
  </p>
  <img className="img-fluid mb-3 pl-4 pr-4" src="../src/assets/img/pickrick/demo.png" />
  <div style={{ paddingBottom: 150 }} />
</>)

let team = [
"Janet Murray (Executive Producer)",
"Angela Dai (Lead Programmer)",
"Joy Dang (Programmer)",
"Adithya Chimalakonda (Animator)",
"Yuchen Zhao (UX Researcher)",
"Brandy Pettijohn (Historical Researcher)"]

const pageInfo = {
  teamList: team,
  projectTitle: "The Pickrick Protests",
  date: "2021-2024",
  projectType: "AR",
  toolsUsed: "C#, Unity, Blender",
  content: content,
  links:[["Github", "https://github.com/angles-d/Pickrick_Unity"],
        ["Visit the Website", "https://sites.gatech.edu/pickrickproject/"]]
}

export default function PickrickInfo(){
 

  return (
    < ProjectPage props = {pageInfo} />
  )
}