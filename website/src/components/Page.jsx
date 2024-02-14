import NavBar from "./NavBar"

//team given in structure of 
//[[Name, Job]]
function createTeam(teamList){
  const formattedTeam = []
  teamList.forEach( element => {
    let [name, job] = element;
    let p = <p>${name} (${job})</p>
    formattedTeam.append(p)
  });
  return formattedTeam
}

function formatLinks(links){

}

export default function Page(props){
  const {teamList, projectTitle, date, projectType, toolsUsed, content} = props.props
  // let team = createTeam({props.teamList})
  return (<>
    {/* header */}
    <div className="container">
      <NavBar/>
      <div className="mt-5 mb-4 row" />
    </div>
    <div className="container">
      <div className="row mb-4">
        <div className="col-4">
          <h1 className="mb-2"> {projectTitle}</h1> 
          <h5>{date}</h5>
          <p className="mb-4"> {projectType} | {toolsUsed}</p>
          
          {/* links */}
          <p>
            <a
              href="https://github.com/EmpathyBytes/VR-Archive"
              className="readmore"> Github</a>
          </p>
          {/* team */}
          <div className="team">
            <div className="row mt-5 mb-4" />
            <h5 style={{ marginBottom: 4 }}>The Team </h5>
            <div style={{ fontSize: 15 }}>
              team
            </div>
          </div>
        </div>
        
        {/* body content */}
        <div className="col">
          <div className="mb-5">
            <div className="sticky-content">
             {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}