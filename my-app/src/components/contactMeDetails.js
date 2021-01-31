import React from "react";
import LinkedIn from "./linkedin.png"
import GitHub from "./githubLogo.png"
import GmailLogo from "./gmailLogo.png"
import PhoneLogo from "./phoneLogo.png"

export default function ContactDetails (){
    return (
        <div >
       <div style={{marginLeft:"500px"}}> 
         <img src={GmailLogo} alt="logo" style={{marginRight:'auto',marginLeft:"auto", height: '50px', width:"100px", float:"left"}}></img>
          <h6 style={{paddingTop:'10px', fontSize:"20px", color:"white"}}>wlogh.89@gmail.com</h6>
          </div>
       <div style={{marginLeft:"510px"}}>
          <img src={PhoneLogo} alt="logo" style={{marginRight:'30px',marginLeft:"auto", height: '40px', width:"70px", float:"left"}}></img>
           <h6 style={{paddingTop:'10px', fontSize:"20px", color:"white"}}>00962787081024</h6>
    </div>

      <div style={{marginLeft:"520px"}}>
          <a href="https://www.linkedin.com/in/walaa-gozlan-a89514147/">
          <img src={LinkedIn} alt="logo" style={{marginRight:'30px',marginLeft:"auto", height: '40px', width:'70px', float:"left"}}></img>
          </a>
          <h6 style={{paddingTop:'10px', fontSize:"20px", color:"white"}} >Walaa Gozlan</h6>

          
      </div>
       <div style={{marginLeft:"520px"}}>  
          <a href="https://github.com/WalaaGozlan">
          <img src={GitHub} alt="logo" style={{marginRight:'30px',marginLeft:"auto", height: '50px', width:'70px', float:"left"}}></img> 
          </a>
          <h6 style={{paddingTop:'10px', fontSize:"20px", color:"white"}} >Walaa Gozlan</h6>

          <br/>
          </div>
          

        </div>
    );
}