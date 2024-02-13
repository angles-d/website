//props = project name, project url, project photo
export default function Project(props){
    return (
        <div className="square col-6 mb-4">
            <a
            href={props.projectUrl}
            className="square-wrap fancybox"
            >
            <div className="info">
                <h3>{props.projectTitle}</h3>
                <span>{props.projectType}</span>
            </div>
            <img className="img-fluid" src={props.imageUrl} />
            </a>
      </div>

    )
}