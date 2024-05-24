import ProjectPage from "../ProjectPage.jsx"
import archiveImg from "../../assets/img/archives/in_archives.jpg"

const pageContent = [
  <p>
    The Georgia Tech Archives is an interactive museum VR experience
    that displays the historical artifacts located the in Georgia Tech
    Library Archives.{" "}
  </p>,
  <img
    className="img-fluid mt-2 mb-4 pl-4 pr-4"
    src={archiveImg}
  />,
  <p>
    This semester the EmpathyBytes team decided to focus on making
    Georgia Tech history more accessible. The team will create 3D
    models of important artifacts within the archives and create a VR
    museum experience where the user can hold and manipulate the
    objects. As the artifacts are fragile and need specialized
    permission to be accessed, the team believed that creating virtual
    versions would allow more people to see and experience them.
  </p>,
  <p>
    The models for the project were created in Blender and modeled
    using reference photos of the artifacts from the archives.
  </p>,
  <p>
    The app is currently still in progress but will be created in
    Unity using ARFoundation.
  </p>]

const archivesTeam = ["Angela Dai (Team Lead: Modeling)",
"Joseph Liu (Team Lead: Unity)",
"Seth Morill (Team Lead: Unity)",
"Jacqueline Le (Modeler)",
"Elise Polo (Modeler)",
"Alison Jasadipura (Programmer)",
"John Pham (Programmer)",
"Rutika Karande (Programmer)",]

const pageInfo = {
  teamList: archivesTeam,
  projectTitle: "The \n Georgia Tech Archives",
  date: ["Fall 2022: ",<i>In Progress</i>],
  projectType: "VR",
  toolsUsed: "C#, Unity, Blender",
  content: pageContent,
  links:[["Github", "https://github.com/EmpathyBytes/VR-Archive"],
        ["Georgia Tech Archives", "https://history.library.gatech.edu/collections/show/9"],
        [ "EmpathyBytes Info", "https://educast.library.gatech.edu/" ]]
}

export default function ArchivesPage(){
  
  return (<>
    < ProjectPage props = {pageInfo} />
    </>)
}