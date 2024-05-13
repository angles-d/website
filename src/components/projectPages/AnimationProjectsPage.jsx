import ProjectPage from "../ProjectPage.jsx"

const content = (<>
  <p>
    These projects were from Georgia Tech's Advanced Computer Animation Class (CS 7496)
  </p>
  
  <h3>Splines </h3>
  <p>
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
  </p>
  <img
  className="col-8  d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/splines.gif"
  />

  <img
  className="col-8  d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/hermite.png"
  />

  <h3>Integrators</h3>
  <p>
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet

  </p>
  <img
  className="col-8  d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/acc_graph.gif"
  />
  <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/free_fall.gif"
  />
   <img
  className="col-8  d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/free_fall_graph.png"
  />

  <h3>Constrained Particle System</h3>
  <p>
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
  </p>
  <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/IK.gif"
  />

  <h3>Rigid Bodies</h3>
  <p>
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
 
  </p>
  <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/rigid_body_setup.png"
  />
    <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/rb.gif"
  />

  <h3>Inverse Kinematics </h3>
  <p>
    I joined the team in the second year of the project's development as a
    programmer and am now the lead programmer and project manager. This project
    has been a huge undertaking, and I've been lucky to work with an
    interdisciplinary team of designers, historians, and UX researchers. This
    project is developed in Unity and designed for an ipad or tablet
  </p>
   <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/IK.gif"
  />
    <img
  className="col-md d-flex align-items-center justify-content-center"
  src="../src/assets/img/animation/mocap_cartwheel.gif"
  />

</>
    
)


const links =[["Github","https://github.com/aelatgt/GCG"]]


const pageInfo = {
    teamList: null,
    projectTitle: ["Animation", <br/>, "Projects"],
    date: ["Fall 2023",<br/>,"Animation Class Projects"],
    projectType: "Animation",
    toolsUsed: "Python",
    content: content,
    links: links
  }

export default function McCloudInfo(){
  return (<>
  <ProjectPage props = {pageInfo} />
  </>
  )
}
