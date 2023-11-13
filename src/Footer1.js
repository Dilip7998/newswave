import React from 'react'
import { FaFacebook ,FaInstagram, FaThreads, FaTwitter} from "react-icons/fa6"


function Footer1() {
  return (
   <>
 <div className="footercontainer">
    <ul>
        <li>
            <img src="logo2.png" style={{height:"50px",width:"80px",borderRadius:"10px"}} alt="" />
            <h3>NewsWave</h3>
            <h5>Every Stroy with Every Angle</h5>
            <h6>Founder : DKY</h6>
            <p></p>
        </li>
    <li><h3>Mission</h3>
    <p>We aim to inspire and empower our viewers with stories of resilience, innovation, and positive social impact from around the world .</p></li>
    <li><h3>Contact us</h3>
    <li>Loaction:NIt Patna 800005</li>
    <li>Email:newswave@gamil.com</li>
    <li>Phone:+911234567890</li>
    </li></ul>
    <div className="footerlast">
      <div className="footericons" style={{display:'flex',justifyContent:'space-evenly',fontSize:'26px',position:'relative',top:'50px'}} >
      <FaFacebook style={{color:'rgb(23, 89, 209)'}}/>
      <FaInstagram style={{color:'rgb(176, 8, 191)'}}/>
      <FaTwitter style={{color:'rgb(49, 57, 212)'}}/>
      <FaThreads style={{color:'rgb(173, 36, 48)'}}/>
      
      </div>

        <ul>
            <li style={{width:"100%",textAlign:"center",position:"relative",top:"100px"}}> Copyright © 2023 <strong style={{color:"rgb(35, 91, 194",fontSize:'18px'}}>NewsWave </strong> <em> Every Stroy, Every Angle</em></li>
        </ul>
    </div>
 </div>
    
  </>)
}

export default Footer1
