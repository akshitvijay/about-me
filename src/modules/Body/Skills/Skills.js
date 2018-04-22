import React from 'react';
import classes from './Skills.css';
import SkillCard from './SkillCard/SkillCard';
import skillData from '../../../assets/skillList';


class Skills extends React.Component {
     

    render() {

        const skillsList = [];
        //console.log(projectData);
        for (var key in Object.keys(skillData)) {
            var data = skillData[key];
            //console.log("data");
            //console.log(data);
            skillsList.push(
                <SkillCard key={key} skill={data} />
            );
        }

        return(
            <div className="skills" >
                <div className= "skillsHeader">
                    <h2>Skills</h2>
                </div>
                <div className = "skillsBody" >
                    {skillsList}
                </div>
            </div>
        );
    }
    
    
    

    
}


export default Skills;