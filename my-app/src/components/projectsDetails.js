// import React from "react";
// import Logo from "./Logo.png"
// export default function ProjectsDetails (){
//     return (
//         <div style={{padding:"30px", backgroundColor:"gray" }}>
//         <p style={{fontFamily: 'cursive', fontSize: '35px'}}>
//        Talk is cheap ... Show me the code.
//         </p>
//         <a href="https://drive.google.com/file/d/1KQDFiRCxphYN_gyPRo9HsRGQH-pmA3vK/view?usp=sharing">
//         <img src={Logo} alt="logo"></img></a>
//         <p style={{fontSize:'20px',  color:"white"}}>SPEAK OUT: It's a website that make a connection between psychological doctors and patients 
//           who need some help and to get advices regarding to their problems.
//           It provides talking about their thoughts with a professional to better understand their
//           thinking and behaviors and resolve their problems.
//           <br/> 
//           I use a SERN stack to build this project which is: <br/>
//           Mysql for a database which is the most secure and reliable database management system
//           and offers unmatched scalability.<br/>
//           Nodejs for building the server which is an open source server environment and uses JavaScript on the server.<br/>
//           Express also for server which is a framework for Nodejs.<br/>
//           React and Redux for frontend side which are a javascript libraries.
//           <br/>

//           Here is the repo for the project:
//         </p> 
//         <a href="https://github.com/WalaaGozlan/speak_out">Speak Out </a>
//         <p style={{fontSize:'20px', color:"white"}}>
//         MAL7OOG: This is a tool that helps Tawjihi students to manage their time and make 
//         their days more effectivethey can choose what subjects they want to study, and for how long.<br/>
//         I use a MERN stack to build this project which is: <br/>
//           MongoDB as a database.<br/>
//           Nodejs for building the server which is an open source server environment and uses JavaScript on the server.<br/>
//           Express also for server which is a framework for Nodejs.<br/>
//           React for frontend side which is a javascript library.
//           <br/>

//         Here is the repo for the project:
//         </p>
//         <a href="https://github.com/WalaaGozlan/mal7oog-project">Mal7oog </a>

//         </div>
//     );
// }

/**
 * 
 * <div class="container-fluid text-center bg-grey">
      <h2>Portfolio</h2><br></br>
      <h4>What we have created</h4>
      
      <div className="row text-center">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="paris.jpg" alt="Paris" width="400" height="300">
            <p><strong>Paris</strong></p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="newyork.jpg" alt="New York" width="400" height="300">
            <p><strong>New York</strong></p>
            <p>We built New York</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="sanfran.jpg" alt="San Francisco" width="400" height="300">
            <p><strong>San Francisco</strong></p>
            <p>Yes, San Fran is ours</p>
          </div>
          </div>
          
      </div>
    </div>
 */



import React from "react";
import Logo from "./Logo.png"
import Mal7oog from "./mal7oog.png";
import Mysql from "./mysqlLogo.png";
import ExpressNode from "./expressNode.png";
import ReactLogo from "./reactLogo.png";
import ReduxLogo from "./reduxLogo.png";
import Socket from "./socketioLogo.png";
import Mongo from "./mongoLogo.png";
import YouTube from "./youtube.png";
import GithubLogo from "./githubLogo.png";


export default function ProjectsDetails (){
    return (
      <div className="container-fluid text-center bg-grey">
        <h2>My Projects</h2><br/>
        <h4>What I have made</h4><br/><br/>
        <div  className="row text-center">


          <div className="col-sm-6">
            <div className="thumbnail">
              <img src={Logo} alt="speakout"></img>
              <p style={{color:"#008B8B", fontSize:"30px"}}><strong>Speak Out</strong></p>
              <p>It's a website that make a connection between psychological doctors and patients 
           who need some help and to get advices regarding to their problems.
           It provides talking about their thoughts with a professional to better understand their
           thinking and behaviors and resolve their problems.</p><br/>
           <p style={{fontSize:"20px"}}><strong>Role:</strong></p>
           <p>Full Stack Developer</p><br/>
           
           <p style={{fontSize:"20px"}}>
             The stack used here is a SERN stack :<br/>
             <img src={Mysql} alt="mysql" style={{padding:'5px', height: '50px', width:"70px", alignSelf:"flex-start", float:"left"}}></img>
              <p style={{textAlign:"left", paddingTop:"25px"}}>for a database</p><br/>

             <img src={ExpressNode} alt="express" style={{padding:'5px',height:"50px", width:"80px", alignSelf:"flex-start", float:"left"}}></img>
             <p style={{textAlign:"left", paddingTop:"25px"}}>for a server side</p><br/>

             <img src={ReactLogo} alt="reactLogo" style={{padding:'5px',height:"50px", width:"70px", alignSelf:"flex-start", float:"left"}}></img>
             <img src={ReduxLogo} alt="redux" style={{padding:'5px',height:"45px", width:"45px", alignSelf:"flex-start", float:"left"}}></img>
             <p style={{textAlign:"left", paddingTop:"15px"}}>for a frontend </p><br/>

             <img src={Socket} alt="socket" style={{padding:'5px',height:"50px", width:"70px", alignSelf:"flex-start", float:"left"}}></img>
             <p style={{textAlign:"left", paddingTop:"25px"}}>for a video call</p><br/>
             
          </p>
          <div style={{paddingLeft:"50%"}}>
           <a href="https://drive.google.com/file/d/1KQDFiRCxphYN_gyPRo9HsRGQH-pmA3vK/view?usp=sharing">
             <img src={YouTube} alt="youtube" style={{height:"35px", width:"45px",float:"left", paddingRight:"20px"}}></img>
             </a>
             
             <a href="https://github.com/WalaaGozlan/speak_out">
          <img src={GithubLogo} alt="github" style={{height:"35px", width:"45px", float:"left"}}></img>
          </a><br/>
          </div>
            </div>
            
          </div>
          
        

          <div className="col-sm-6">
            <div className="thumbnail">
              <img src={Mal7oog} alt="mal7oog"></img>
              <p><strong>Mal7oog</strong></p>
              <p>This is a tool that helps Tawjihi students to manage their time and make 
            their days more effectivethey can choose what subjects they want to study, and for how long.</p><br/>

            <p style={{fontSize:"20px"}}><strong>Role:</strong></p>
           <p>Scrum Master</p><br/>
           <p style={{fontSize:"20px"}}>
             The stack used here is a MERN stack :<br/>
             <img src={Mongo} alt="mongo" style={{padding:'5px', height: '50px', width:"90px", alignSelf:"flex-start", float:"left"}}></img>
              <p style={{textAlign:"left", paddingTop:"25px"}}>for a database</p><br/>

             <img src={ExpressNode} alt="express" style={{padding:'5px',height:"50px", width:"80px", alignSelf:"flex-start", float:"left"}}></img>
             <p style={{textAlign:"left", paddingTop:"25px"}}>for a server side</p><br/>

             <img src={ReactLogo} alt="reactLogo" style={{padding:'5px',height:"50px", width:"70px", alignSelf:"flex-start", float:"left"}}></img>
             <p style={{textAlign:"left", paddingTop:"15px"}}>for a frontend </p><br/>

           </p>
           <div  style={{paddingLeft:"50%"}}>
           <a href="https://github.com/WalaaGozlan/mal7oog-project">
          <img src={GithubLogo} alt="github" style={{height:"35px", width:"45px", float:"left"}}></img>
          </a><br/>
           </div>

            </div>
          </div>
        


        </div>
      </div>
    )

      
    
      
}

