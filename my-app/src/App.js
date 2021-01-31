import './App.css';
import AboutMe from "./components/aboutMe"
import AboutMeDetails from "./components/aboutMeDetails"

import Skills from "./components/skills"
import SkillsDetails from "./components/skillsDetails"

import Projects from "./components/projects"
import ProjectsDetails from "./components/projectsDetails"

import Education from "./components/education"
import EducationDetails from "./components/educationDetails"

import { makeStyles } from '@material-ui/core/styles';
import ContactMe from "./components/contactMe"
import ContactMeDetails from "./components/contactMeDetails"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Grid } from "@material-ui/core"

const useStyles = makeStyles({
  gridContainer : {
    paddingLeft : "50px",
    paddingRight : "50px",
    paddingBottom : "50px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <p style={{fontSize:"70px", fontStyle:"revert", color:"#5F9EA0", textAlign: 'center'}}>Walaa Gozlan</p>
      <p style={{fontSize:"50px", textAlign: 'center', color:"white"}}>Dreams is not what you see in sleep ....<br/> It is the thing which doesn't let you sleep </p>
      
      <Router>
        
        <Switch>
        <Route path="/aboutMeDetails" exact component={AboutMeDetails}/>
        <Route path="/contactMeDetails" exact component={ContactMeDetails}/>
        <Route path="/educationDetails" exact component={EducationDetails}/>
        <Route path="/projectsDetails" exact component={ProjectsDetails}/>
        <Route path="/skillsDetails" exact component={SkillsDetails}/>
        
        <Grid container spacing="center" className ={classes.gridContainer}>
        <Grid xs={4} sm={12} md={4} style={{paddingBottom:"20px"}}>
      <AboutMe />
      </Grid>
      <Grid xs={4} sm={12} md={4} style={{paddingBottom:"20px"}}>
      <Projects />
      </Grid>

      <Grid xs={4} sm={12} md={4} style={{paddingBottom:"20px"}}>
      <Skills />
      </Grid>

      <Grid xs={4} sm={12} md={4} style={{paddingBottom:"20px"}}>
      <Education />
      </Grid>

      <Grid xs={4} sm={12} md={4} style={{paddingBottom:"20px"}}> 
      <ContactMe />
      </Grid>
      
      </Grid>
        </Switch>
      </Router>
    
    </div>
   
  );
}

export default App;
