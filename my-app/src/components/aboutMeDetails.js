import React from "react";
export default function AboutMeDetails (){
    return (
        
        <div style={{padding: "50px", fontFamily:"cursive"}}>
              <div className="about" >
        <h3 style={{fontSize:"40px"}}>About Me</h3>
        
        {/* <button type="button" className="btn btn-info"><a href="https://drive.google.com/file/d/1sU8JVtrAjMpcC8BnUoAOSHUUWyoFUzbp/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></button> */}
        
      </div>

        <p style={{color:"white",fontSize:"30px", background:"#483D8B", opacity:"0.5"}}>
        A junior software developer who's being driven by passion to code and problem solving.<br/>
        Besides I'm seeking to help people make their lives easier by applying
        technologies in their <br/> daily life and also passionate about put my positive  
        fingerprint by writing clear and clean code.
        </p>
        </div>
    );
}