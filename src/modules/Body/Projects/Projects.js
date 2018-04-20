import React from 'react';
import classes from './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import projectData from '../../../assets/projectsList';


class Projects extends React.Component {
     

    render() {

        const ProjectList = [];
        console.log(projectData);
        for (var key in Object.keys(projectData)) {
            var data = projectData[key];
            ProjectList.push(
                <ProjectCard key={key} project={data} />
            );
        }

        return(
            <div className="projects">
                <div className= "projectsSectionTitle">
                    <h1>Projects</h1>
                    <hr/>
                    {ProjectList}
                </div>
            </div>
        );
    }
    
    
    

    
}


export default Projects;