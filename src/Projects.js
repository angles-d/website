import React from "react"
import ProjThumbnail from "./ProjThumbnail";
import Dog from "./Dog";
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <ProjThumbnail
      link="/Dog"
      img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbarkpost.com%2Fwp-content%2Fuploads%2F2014%2F06%2FDOG-2-superJumbo.jpg&f=1&nofb=1"
      alt = "dog"
      title = "Dog"
      type = "website"></ProjThumbnail> 
    </div>
  )
}
 
export default Projects;