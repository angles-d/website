import ProjectPage from "../ProjectPage.jsx"

const content = [
    <p>The McCloud Pyramid project is an interactive VR representation of Scott McCloud's "Big Triangle" of visual
      meaning made in Mozilla Hubs.
    </p>,

    <p className="mb-0">There three forms of visual meaning within the triangle: text, reality, and
      abstract. These forms can be merged together to create intermediate forms of reality. To represent
      these forms we used a face as the base object. As the user moves across the room, the
      face model morphs from one form of meaning to the other with each corner of the pyramid representing a new
      form of reality.
    </p>,

    <div className="d-flex justify-content-center">
      <img className="col-9  mb-4 img-fluid" src="../src/assets/img/mccloud/meaning-map.png"/>
    </div>,

    <p>
      For instance, if the user starts at the "abstract" corner, they see a sphere model. As they
      move towards the "reality" corner the model slowly morphs into a realistic
      face. This progression was achieved by creating the transition with shapekeys in Blender and
    then using morph-targets in Three.js to perform the realtime morphing.
  </p>,
  <div className="d-flex justify-content-center">
    <img className="mt-2 mb-4" src="../src/assets/img/mccloud/morphing.gif"/>
  </div>,
  <p>,
    As the project progressed, additional intermediate steps were added into the path to
    better reflect McCloud's "Big Triangle". For instance, in the transition from text to
    reality, intermediate models such as emoticons and emojis were added between the model of the text "face" and the final realistic face.
  </p>,

  <div className="d-flex justify-content-center">
    <img className="mb-4" id="mirror" src="../src/assets/img/mccloud/mirror.gif"/>
  </div>,
]

const team = [ "Daniel Phelps (Project Manager)",
"Angela Dai (Programmer)",
"Lintong Han (Programmer)",
"Althea Luo (Modeler)",
"Arushi Gupta (Modeler)",]

const links =[["Github","https://github.com/aelatgt/GCG"]]


const pageInfo = {
    teamList: team,
    projectTitle: ["The McCloud", <br/>, "Pyramid"],
    date: "2020",
    projectType: "VR",
    toolsUsed: "JS, Three.js, Blender",
    content: content,
    links: links
  }

export default function McCloudInfo(){
  return (<>
  <ProjectPage props = {pageInfo} />
  </>
  )
}
