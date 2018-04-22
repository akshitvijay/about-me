import React, {Image} from 'react';
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
        

    var imageurl="../../../../assets/projects/githawk.png";
    imageurl="../../../../assets/projects/"+props.project.screenshots;
    imageurl="../../../../assets/projects/githawk.png";

    //console.log(props.project.screenshots);
    //console.log(imageurl);



    return(
        <div className="projectcard">
            <div className="SectionTitle">
                <center><h1>{props.project.title}</h1></center> 
            </div>
            <div className="screenshot">
                <img src={props.project.screenshots} />
            </div>
            <div>
                    <h3>Usecase:</h3> <p> {props.project.usecase}</p>
            </div>  
            <div>
                    <h3>TechStack:</h3>  <p>{props.project.techstack} </p>
            </div>  
            <div className="repoLink">
                    <h2>{repoLink}</h2>           
            </div>   

            <hr width="100%" color="darkgoldenrod"/>  
        </div>
    );
}
export default ProjectCard;