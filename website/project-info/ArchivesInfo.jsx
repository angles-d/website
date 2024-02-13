export default function ArchivesInfo(){
  return (<>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Modeling the Hive</title>
    <meta content="" name="description" />
    <link href="assets/img/favicon.png" rel="icon" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <link href="./../style.css" rel="stylesheet" />
    {/* header */}
    <div className="container">
      {/* .sticky-top for scrolling navbar */}
      <div className="mt-5 row align-items-center">
        <div className="col-6 offset-6 text-start text-lg-end  justify-content-end nav-bar  d-flex">
          <a href="./../index.html" className="">
            Home
          </a>
          <a href="./../index.html#projects" className="pl-3">
            Projects
          </a>
          <a href="./../about-me.html" className=" pl-3">
            About
          </a>
          <a href="./../contact-me.html" className="pl-3">
            Contact
          </a>
          <a href="./../Dai_Resume.pdf" className="pl-3">
            Resume
          </a>
        </div>
      </div>
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
                src="./../img/archives/in_archives.jpg"
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
              {/* <div class = "row"> */}
              {/* <div class = "col pr-1">
                            <img class="img-fluid pl-4  mt-2 mb-3" src="./../img/hive/ref.jpg">
                        </div>
                        <div class = "col pl-1">
                            <img class="img-fluid pr-4 mt-2 mb-3" src="./../img/hive/model.png">
                        </div>
                    </div> */}
              {/* <img class="img-fluid mt-2 mb-4 pl-4 pr-4" src="./../img/hive/hive_blender.png"> */}
              <p>
                The app is currently still in progress but will be created in
                Unity using ARFoundation.
              </p>
              {/* <img class="img-fluid mt-2 mb-4 pl-4 pr-4" src="./../img/hive/hive_unity.png"> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}