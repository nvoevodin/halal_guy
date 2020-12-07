import { Link } from 'react-router-dom';
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaravan } from '@fortawesome/free-solid-svg-icons'

import classes from "./navigationBar.module.css"
import { auth } from '../../services/firebase'


function NavigationBar() {
  return (
    <div>
      {auth().currentUser ?

        <div className={classes.NavWidth}>
          <Navbar expand="lg" style={{ width: '90%', margin: 'auto' }}>
            <Navbar.Brand href="/home">

              <FontAwesomeIcon icon={faCaravan} size='4x' style={{ margin: '1% auto' }} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-item nav-link" to="/addVendor">Vendors</Link>
                <Link className="nav-item nav-link" to="/pricing">Partnership</Link>
                <Link className="nav-item nav-link" to="/profile">My Account</Link>

              </Nav>
              <Nav>
                <NavDropdown title="New York" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="Boston">Boston</NavDropdown.Item>
                  <NavDropdown.Item href="Philadelphia">Philadelphia</NavDropdown.Item>
                  <NavDropdown.Item href="Miami">Miami</NavDropdown.Item>
                  <NavDropdown.Item href="Los">Los Angeles</NavDropdown.Item>
                </NavDropdown>
               
              </Nav>
              <Nav>
                <Button onClick={() => auth().signOut()} variant="outline-success">Sign Out</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar> </div> :

        <div className={classes.NavWidth}>
          <Navbar expand="lg" style={{ width: '90%', margin: 'auto' }}>
            <Navbar.Brand href="/home">

              <FontAwesomeIcon icon={faCaravan} size='4x' style={{ margin: '1% auto' }} />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-item nav-link" to="/addVendor">Vendors</Link>
                <Link className="nav-item nav-link" to="/pricing">Partnership</Link>

              </Nav>
              <Nav>
                <NavDropdown title="New York" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="Boston">Boston</NavDropdown.Item>
                  <NavDropdown.Item href="Philadelphia">Philadelphia</NavDropdown.Item>
                  <NavDropdown.Item href="Miami">Miami</NavDropdown.Item>
                  <NavDropdown.Item href="Los">Los Angeles</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-item nav-link" to="/login">Log In</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>



      }</div>

  );
}

export default NavigationBar;