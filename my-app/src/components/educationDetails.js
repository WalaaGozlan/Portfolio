import React from "react";
import RBK from "./rbkLogo.png"
import LTUC from "./ltuc.jpg"
import DamascusUniversity from "./damascusUniversityLogo.png"
export default function EducationDetails (){
    return (
        <div>
        <p style={{color:"#191970", fontStyle:"oblique", fontSize:"30px"}}>
        Education is the passport to the future, for tomorrow 
          belongs to those who prepare for it today. 
        </p>
        <div>
          <img alt="" src={RBK} style={{height: '50px', width:"200px", float:"left", paddingRight:"30px", paddingLeft:"30px"}}></img>
          <p style={{fontFamily:"cursive", fontSize:"20px",  color:"white"}}>Full stack software engineer <br/>
            Aug 2020 - Jan 2021<br/>
            </p>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <img alt="" src={LTUC} style={{height: '100px', width:"250px", float:"left", paddingRight:"30px"}}></img>
          <p style={{fontFamily:"cursive", fontSize:"20px", paddingTop:"30px",  color:"white"}}>British Diploma Business Administration  <br/>
          May 2019- Jan 2020<br/>
            </p>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
        <img alt="" src={DamascusUniversity} style={{height: '150px', width:"250px", float:"left", paddingRight:"30px"}}></img>
          <p style={{fontFamily:"cursive", fontSize:"20px", paddingTop:"40px",  color:"white"}}>Bachelors of pharmacy  <br/>
          2009 - 2014<br/>
            </p>
        </div>
        </div>
    );
}