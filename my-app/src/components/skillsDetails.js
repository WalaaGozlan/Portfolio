import React from "react";
import HtmlLogo from "./htmlLogo.png";
import CssLogo from "./cssLogo.png";
import GithubLogo from "./githubLogo.png";
import JsLogo from "./jsLogo.jpg";
import ReduxLogo from "./reduxLogo.png";
import Mongo from "./mongoLogo.png";
import Mysql from "./mysqlLogo.png";
import Jquery from "./jqueryLogo.png";
import Node from "./nodeLogo.png";
import Socket from "./socketioLogo.png";
import Heroku from "./herokuLogo.png";
import Express from "./express.png";
import ReactLogo from "./reactLogo.png";

export default function SkillsDetails (){
    return (
        <div>
        <p style={{fontFamily:"cursive", fontSize:"30px", backgroundColor:"#F5F5DC"}}>
        Always code as if the guy who ends up maintaining 
          your code will be a violent psychopath who 
          knows where you live
        </p>
        <img src={JsLogo} alt="logo" style={{height: '200px'}}></img>

        <img src={HtmlLogo} alt="logo" style={{padding:'30px', height: '200px'}}></img>
        <img src={CssLogo} alt="logo" style={{padding:'30px', height: '200px'}}></img>
        <img src={GithubLogo} alt="logo" style={{padding:'30px', height: '200px'}}></img>
        <img src={ReduxLogo} alt="logo" style={{padding:'30px', height: '200px'}}></img>
        <img src={Mongo} alt="logo" style={{padding:'30px', height: '100px', width:"350px"}}></img>
        <img src={Mysql} alt="logo" style={{padding:'30px', height: '100px', width:"250px"}}></img>
        <img src={Jquery} alt="logo" style={{padding:'30px', height: '80px', width:"350px"}}></img>
        <img src={Node} alt="logo" style={{padding:'30px', height: '100px', width:"250px"}}></img>
        <img src={Socket} alt="logo" style={{padding:'30px', height: '150px', width:"250px"}}></img>
        <img src={Heroku} alt="logo" style={{padding:'30px', height: '150px', width:"350px"}}></img>
        <img src={Express} alt="logo" style={{padding:'30px', height: '150px', width:"350px"}}></img>
        <img src={ReactLogo} alt="logo" style={{padding:'30px', height: '150px', width:"350px"}}></img>


        </div>
    );
}