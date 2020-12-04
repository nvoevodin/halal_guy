import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from '@fortawesome/free-solid-svg-icons'

import classes from "./navigationBar.module.css"


function NavigationBar() {
    return (
        <div className = {classes.NavWidth}>
        <Navbar expand="lg" style = {{width:'90%', margin:'auto'}}>
          <Navbar.Brand href="/">
          
          <FontAwesomeIcon icon={faCaravan} size = '4x' style = {{margin:'1% auto'}}/>
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="addVendor">Vendors</Nav.Link>
              <Nav.Link href="pricing">Partnership</Nav.Link>

            </Nav>
            <Nav>
            <NavDropdown title="New York" id="collasible-nav-dropdown">
                <NavDropdown.Item href="Boston">Boston</NavDropdown.Item>
                <NavDropdown.Item href="Philadelphia">Philadelphia</NavDropdown.Item>
                <NavDropdown.Item href="Miami">Miami</NavDropdown.Item>
                <NavDropdown.Item href="Los">Los Angeles</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        </div>
    );
  }
  
  export default NavigationBar;