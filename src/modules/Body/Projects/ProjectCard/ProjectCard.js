import React from 'react';
import classes from './ProjectCard.css';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';

const ProjectCard = (props) => {
    //console.log(props.project);
    var repoLink = (
        <a href={props.project.repo} style={{color:"goldenrod", underline:false}}> 
            <span >View the Code On : Github  </span>
            <big> <FaGithubAlt /> </big>
        </a>
        );

    if(props.project.repo === "none"){
        repoLink = "";
    }
        

    return(
        <div className="projectcard">
            <div className="SectionTitle">
                <center><h1>{props.project.title}</h1></center> 
            </div>
            <div>
                    <h3>Usecase:</h3> <p> {props.project.usecase}</p>
            </div>  
            <div>
                    <h3>TechStack:</h3>  <p>{props.project.techstack} </p>
            </div>  
            <div className="repoLink">
                    {repoLink}
                    
            </div>  
            <div>
                   {props.project.screenshots}
            </div>  
                <p> </p>
            <hr width="60%" color="goldenrod"/>  
        </div>
    );
}
export default ProjectCard;