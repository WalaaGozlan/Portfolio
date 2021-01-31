import React from "react";
import Logo from "./Logo.png"
export default function ProjectsDetails (){
    return (
        <div style={{padding:"30px" }}>
        <p style={{fontFamily: 'cursive', fontSize: '35px'}}>
       Talk is cheap ... Show me the code.
        </p>
        <img src={Logo} alt="logo"></img>
        <p style={{fontSize:'20px',  color:"white"}}>SPEAK OUT: It's a website that make a connection between psychological doctors and patients 
          who need some help and to get advices regarding to their problems.
          It provides talking about their thoughts with a professional to better understand their
          thinking and behaviors and resolve their problems.
          <br/> 
          I use a SERN stack to build this project which is: <br/>
          Mysql as a database which is the most secure and reliable database management system
          and offers unmatched scalability.<br/>
          Nodejs for building the server which is an open source server environment and uses JavaScript on the server.<br/>
          Express also for server which is a framework for Nodejs.<br/>
          React and Redux for frontend side which are a javascript libraries.
          <br/>

          Here is the repo for the project:
        </p> 
        <a href="https://github.com/WalaaGozlan/speak_out">Speak Out </a>
        <p style={{fontSize:'20px', color:"white"}}>
        MAL7OOG: This is a tool that helps Tawjihi students to manage their time and make 
        their days more effectivethey can choose what subjects they want to study, and for how long.<br/>
        I use a MERN stack to build this project which is: <br/>
          MongoDB as a database.<br/>
          Nodejs for building the server which is an open source server environment and uses JavaScript on the server.<br/>
          Express also for server which is a framework for Nodejs.<br/>
          React for frontend side which is a javascript library.
          <br/>

        Here is the repo for the project:
        </p>
        <a href="https://github.com/WalaaGozlan/mal7oog-project">Mal7oog </a>

        </div>
    );
}