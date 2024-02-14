import NavBar from "./NavBar"
import Page from "./Page"

const pageContent = [
  <p>
    The Georgia Tech Archives is an interactive museum VR experience
    that displays the historical artifacts located the in Georgia Tech
    Library Archives.{" "}
  </p>,
  <img
    className="img-fluid mt-2 mb-4 pl-4 pr-4"
    src="../src/assets/img/archives/in_archives.jpg"
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

  const team = [<p>Angela Dai (Team Lead: Modeling)</p>,
  <p>Joseph Liu (Team Lead: Unity)</p>,
  <p>Seth Morill (Team Lead: Unity)</p>,
  <p>Jacqueline Le (Modeler)</p>,
  <p>Elise Polo (Modeler)</p>,
  <p>Alison Jasadipura (Programmer)</p>,
  <p>John Pham (Programmer)</p>,
  <p>Rutika Karande (Programmer)</p>,]

  const pageInfo = {
    teamList :[ ["Angela Dai", "Lead Programmer"]],
    projectTitle: "The \n Georgia Tech Archives",
    date: ["Fall 2022: ",<i>In Progress</i>],
    projectType: "VR",
    toolsUsed: "C#, Unity, Blender",
    content: pageContent,
  }

export default function ArchivesPage(){
  
  return (<>
    < Page props = {pageInfo} />
    {/* <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Modeling the Hive</title>
    {/* header }
    <div className="container">
      {/* .sticky-top for scrolling navbar }
      <NavBar/>
      <div className="mt-5 mb-4 row" />
    </div>
    <div className="container">
      <div className="row mb-4">
        <div className="col-4">
          <h1 className="mb-2">
            The <br />
            Georgia Tech Archives
          </h1>
          <h5>
            Fall 2022: <i>In Progress</i>
          </h5>
          <p className="mb-4">VR | C#, Unity, Blender</p>
          <p>
            <a
              href="https://github.com/EmpathyBytes/VR-Archive"
              className="readmore"
            >
              Github
            </a>
          </p>
          <p>
            <a
              href="https://history.library.gatech.edu/collections/show/9"
              className="readmore"
            >
              Georgia Tech Archives
            </a>
          </p>
          <p>
            <a href="https://educast.library.gatech.edu/" className="readmore">
              EmpathyBytes Info
            </a>
          </p>
          <p />
          <div className="team">
            <div className="row mt-5 mb-4" />
            <h5 style={{ marginBottom: 4 }}>The Team </h5>
            <div style={{ fontSize: 15 }}>
              <p>Angela Dai (Team Lead: Modeling)</p>
              <p>Joseph Liu (Team Lead: Unity)</p>
              <p>Seth Morill (Team Lead: Unity)</p>
              <p>Jacqueline Le (Modeler)</p>
              <p>Elise Polo (Modeler)</p>
              <p>Alison Jasadipura (Programmer)</p>
              <p>John Pham (Programmer)</p>
              <p>Rutika Karande (Programmer)</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="mb-5">
            <div className="sticky-content">
              <p>
                The Georgia Tech Archives is an interactive museum VR experience
                that displays the historical artifacts located the in Georgia Tech
                Library Archives.{" "}
              </p>
              <img
                className="img-fluid mt-2 mb-4 pl-4 pr-4"
                src="../src/assets/img/archives/in_archives.jpg"
              />
              <p>
                This semester the EmpathyBytes team decided to focus on making
                Georgia Tech history more accessible. The team will create 3D
                models of important artifacts within the archives and create a VR
                museum experience where the user can hold and manipulate the
                objects. As the artifacts are fragile and need specialized
                permission to be accessed, the team believed that creating virtual
                versions would allow more people to see and experience them.
              </p>
              <p>
                The models for the project were created in Blender and modeled
                using reference photos of the artifacts from the archives.
              </p>
            
              <p>
                The app is currently still in progress but will be created in
                Unity using ARFoundation.
              </p>
            </div>
          </div>
        </div>
      </div> 
     </div> */}
  </>
  )
}