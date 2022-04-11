import React from "react";
import {Link} from "react-router-dom";
import "./App.css";

function ProjThumbnail(props){
    return(
        <div className = "project">
            <Link to={props.link}>
                <div className="project-img">
                    <img src= {props.img} alt = {props.alt}/>
                </div>
                <div className="project-title">{props.title}</div>
                <div className="project-type">{props.type}</div>
            </Link>
        </div>
    );
}

export default ProjThumbnail;
