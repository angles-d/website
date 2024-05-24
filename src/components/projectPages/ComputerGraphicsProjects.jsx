import ProjectPage from "../ProjectPage.jsx"

const content = (<>
  <p>
    These projects were from Georgia Tech's Graduate Computer Graphics Class (CS 6491)
  </p>
  
  <h3>Raytracer </h3>
  <p>

  </p>
 

  <h3>Mesh Manipulation</h3>
  <p>

  </p>


  <h3>Implicit Surfaces</h3>
  <p>
    I joined the team in the second year of the project's development as a
  </p>
  

</>
    
)


const links =[["Github","https://github.com/aelatgt/GCG"]]


const pageInfo = {
    teamList: null,
    projectTitle: ["Computer Graphics", <br/>, "Projects"],
    date: ["Spring 2022",<br/>,"Computer Graphics Class Projects"],
    projectType: "Computer Graphics",
    toolsUsed: "Java",
    content: content,
    links: links
  }

export default function GraphicsInfo(){
  return (<>
  <ProjectPage props = {pageInfo} />
  </>
  )
}
