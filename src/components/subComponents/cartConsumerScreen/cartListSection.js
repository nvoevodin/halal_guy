import {React,Text, useState} from 'react'
import { Row, Button, DropdownButton,Dropdown} from 'react-bootstrap'
import MenuCard from './menuCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import classes from './cartListSection.module.css'

var foo = Array.from(Array(6).keys())

function CartListSection(){

    

    return(
<div style = {{justifyContent:'space-around', backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2 480px)", paddingLeft: 30, paddingRight:30}}>



        <h2 className={classes.mainText}>Filters</h2>
         
        <Row >
        <DropdownButton className = {classes.btnCircle} title="Price" variant="outline-secondary"  >
  <Dropdown.Item href="#/action-1">Low to High</Dropdown.Item>
  <Dropdown.Item href="#/action-2">High to Low</Dropdown.Item>
</DropdownButton>

<DropdownButton className = {classes.btnCircle} title="Location" variant="outline-secondary">
<Dropdown.Item href="#/action-1">Low to High</Dropdown.Item>
  <Dropdown.Item href="#/action-2">High to Low</Dropdown.Item>
</DropdownButton>

<DropdownButton className = {classes.btnCircle} title="Rating" variant="outline-secondary">
<Dropdown.Item href="#/action-1">Low to High</Dropdown.Item>
  <Dropdown.Item href="#/action-2">High to Low</Dropdown.Item>
</DropdownButton>



        </Row>
       
    
        <hr class="solid"/> 
       
        <h2 className={classes.mainText}>Promotions</h2>
        
        
<div className={classes.scrollingWrapper}>
{foo.map((i,index) =>
    <MenuCard  key = {index} description = {i} style = {{padding: '25px'}}/>
)}
      </div>
      
     
        <h2 className={classes.mainText}>Carts</h2>
       
<Row style = {{justifyContent:'space-between'}}>





{foo.map((i,index) =>
    <MenuCard key = {index} description = {i}/>
)}




</Row>
</div>
    )
}

export default CartListSection;