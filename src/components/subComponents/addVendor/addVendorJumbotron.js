import React, {Component} from 'react'
import {Dropdown,Jumbotron, Image, Row, Button,InputGroup,Form,FormControl} from 'react-bootstrap'

import classes from './addVendorJumbotron.module.css'
//import HalalImage from '../../assets/halalPic.jpg';

function AddVendorJumbotron() {
    return (
     
<Jumbotron fluid className = {classes.JumboWidth}>
  
<h4 style = {{color:"white", marginBottom:'5%'}}><span style = {{fontWeight:'bolder'}}>Halal</span> <span style = {{fontWeight:'lighter'}}>Guy</span></h4>
    
  <p className={classes.MainText}>
      Express connection <br/> of your cart to <br /> Halal Guy.
  </p>

  <p style = {{color:"white"}}>Simple steps to connect and answers to popular questions</p>

 


      <Button variant="outline-secondary">Connect</Button>
    

 
</Jumbotron>
     
    )}
export default AddVendorJumbotron
