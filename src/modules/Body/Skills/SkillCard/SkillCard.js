import React from 'react';
import classes from './SkillCard.css';

var DoughnutChart = require("react-chartjs").Doughnut;



  const chartOptions = {
	//Boolean - Whether we should show a stroke on each segment
	segmentShowStroke : true,

	//String - The colour of each segment stroke
	segmentStrokeColor : "#fff",

	//Number - The width of each segment stroke
	segmentStrokeWidth : 2,

	//Number - The percentage of the chart that we cut out of the middle
	percentageInnerCutout : 80, // This is 0 for Pie charts

	//Number - Amount of animation steps
	animationSteps : 100,

	//String - Animation easing effect
	animationEasing : "easeOutBounce",

	//Boolean - Whether we animate the rotation of the Doughnut
	animateRotate : true,

	//Boolean - Whether we animate scaling the Doughnut from the centre
	animateScale : true,
	// {% raw %}
	// //String - A legend template
	// legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
	// {% endraw %}
    };





  
  
    class SkillCard extends React.Component{
    render() {
        const chartData1 = [
            {
                value: 100-this.props.skill.value,
                color: "#ffffff",
                highlight: "#000000",

            },
            {
                value: this.props.skill.value,
                color:"goldenrod",
                highlight: "darkgoldenrod",
              
            }
        ];

       

        return(
            <div className="skillCard">
                <div className="skillName">
                    {this.props.skill.skillname}
                </div>    
                <div className="skillChart">
                    <DoughnutChart data={chartData1} options={chartOptions}/>
                </div>    
            </div>
        );
    }

  }
  
  export default SkillCard;