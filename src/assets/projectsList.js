import githawk from './projects/githawk.png';
import parkingapp from './projects/parkingapp.png';
import rightnow from './projects/rightnow.png';

export default [
        {
            "title": "Github Watch",
            "usecase": "The motive is to allow a rapidly scaling product company to keep better track of Production bugs(originally tracked on github) and creating social incentives for dev teams to fix bugs.",
            "techstack": "The frontend is written in javascript, with react for rendering and redux for state management. The Backend is a Flask App. ",
            "repo":"none",
            "screenshots":githawk
        },
        {
            "title": "Parking App",
            "usecase": "The app provides a medium for the users of a Multifloor Office Parking Space to coordinate amongst themselves. The application is currently being productionized. ",
            "techstack": "The frontends are native apps built from a React Native codebase. The backend is written in Node.js using the Express framework. postgresql is being used as the database",
            "repo":"none",
            "screenshots":parkingapp
        },
        {
            "title": "Right Now",
            "usecase": "Right Now is a simple terminal based productivity tool that helps a user to track and analyze the time he/she spends on different activities on a PC in a day. A slack bot extension is in the works.",
            "techstack": "It is written in Python and tries to create a easy user experience by using aliases.",
            "repo":"https://github.com/akshitvijay/right-now",
            "screenshots":rightnow
        },
    ] ;
