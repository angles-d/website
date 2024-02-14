import ProjectPage from "./ProjectPage.jsx"

const content = [
    <p> Lets Build! is a block-based multiplayer AR application that allows users to collaboratively build structures, memories, and endless amounts of chaos built for HackGT9.
    </p>,
    <div class="embed-responsive embed-responsive-16by9 mb-4">
        <iframe  class="mb-4 pl-4 pr-4" src="https://www.youtube.com/embed/tW86dV27mk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>,
    <p class="mb-0">Lets Build creates a virtual AR sandbox playground where the children can build together with blocks. Nearby users will be able to influence each other's space and view and interact with each other's block additions. Each user is assigned a unique block color and must collaborate with the others to create and design the scene. 
    </p>,
    <br/>,
    <p>,
    To implement the multiplayer functionality, we used Apple's Multiplayer connectivity Framework coupled with ARFoundation Samples library. We used both physics and AR rays to detect potential collisions between both AR and real-world objects allowing the player to interact with both the AR blocks and world around them. Plane tracking was used to create the initial game board and placeable area for the blocks.
    </p>,
    <div class="d-flex justify-content-center">
        <img class="" src="../src/assets/img/letsbuild/letsbuild.gif"/>
    </div>
]

const team = ["Angela Dai (Programmer)",
"Sabiha Shaik (Programmer)",
"Alison Jasadipura (Programmer)",
"Riddhi Madeka (UI)",]

const links =[["Devpost","https://devpost.com/software/lets-build"],
["Github", "https://github.com/angles-d/HackGT9"],
["Figma","https://www.figma.com/file/ZaGfzMxBhxcRp7UBoxerV7/HackGT9?node-id=0%3A1"]
]


const pageInfo = {
    teamList: team,
    projectTitle: "Let's Build!",
    date: "HackGT 2022",
    projectType: "AR",
    toolsUsed: "C#, Unity",
    content: content,
    links: links
  }

export default function LetsBuildInfo(){
  return (<>
  <ProjectPage props = {pageInfo} />
  </>
  )
}