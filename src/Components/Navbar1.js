import React, { useState } from 'react'
import {Button,Container,Form,Nav,Navbar,NavDropdown} from "react-bootstrap"
import {NavLink, useNavigate} from 'react-router-dom';
import './style.css';



function Navbar1() {
  const [inputdata,setinputdata]=useState();
  const navigate=useNavigate();
  const searchhandle=()=>{
    // console.log(inputdata);
    navigate("/searchpage",{state:{value:inputdata}})
   

  }
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src="logo2.png" alt="error" id='logo' title='NewsWave , Every Story Every Angle' /></Navbar.Brand>
         <h4 id='newstitle'>NewsWave</h4>
         <h6 id='newssubtitle'>Every Story, Every Angle</h6>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0" id="navbar"
            style={{ maxHeight: '100px' ,fontSize:"20px",fontWeight:"500"}}
            navbarScroll
          > <NavLink  to="/" >Home</NavLink>
          <NavLink to="/sports">Sports</NavLink>
           <NavLink to="/technology">Technology</NavLink>
          <NavLink to="/health">Health</NavLink>
           <NavLink to="/entertainment">Entertainment</NavLink>
           
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='input'
              onChange={(e)=>{setinputdata(e.target.value)}} onKeyDown={(e)=>{
  
                if(e.key==='Enter'){
                  e.preventDefault();
                  searchhandle();
                }
              }}
            />
            <Button variant="outline-success" onClick={searchhandle}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
    <div className="marquetitle"><marquee behavior="" scrollamount="9" direction="left"> You are Watching <strong>NewsWave</strong> , <em>Every Strory with Every Angle</em>  </marquee></div>

    </div>
  )
}

export default Navbar1
