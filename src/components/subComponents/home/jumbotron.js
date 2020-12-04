import React, {Component} from 'react'
import {Dropdown,Jumbotron, Image, Row, Button,InputGroup,Form,FormControl} from 'react-bootstrap'

import classes from './jumbotron.module.css'
//import HalalImage from '../../assets/halalPic.jpg';

function MainJumbotron() {
    return (
     
<Jumbotron className = {classes.JumboWidth}>
  

    
  <h1 style = {{color:'white', marginBottom:'2%'}}><span style = {{fontWeight:'bolder'}}>Halal</span> <span style = {{fontWeight:'lighter'}}>Guy</span></h1>
  <p className={classes.MainText}>
    Skip lines and enjoy your <br /> favorite food.
  </p>

 

<Form inline style={{ width: "100%" }}>
<InputGroup className="mb-3" style={{ width: "50%" }}>
    <FormControl
      placeholder="Your Zipcode"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary">Search</Button>
    </InputGroup.Append>
    <InputGroup>
    <Dropdown style = {{marginLeft:'5%'}}>
  <Dropdown.Toggle variant="warning" id="dropdown-basic">
    Locate Me
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Солнцезащитные</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Для Зрения</Dropdown.Item>
    <Dropdown.Item href="#/action-3">...</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </InputGroup>
  </InputGroup>

</Form>

 
</Jumbotron>
     
    )}
export default MainJumbotron
