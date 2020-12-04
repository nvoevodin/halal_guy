import {React,Text, useState} from 'react'
import { Row, Button, DropdownButton,Dropdown} from 'react-bootstrap'
import CartCard from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'

import classes from './vendorListSection.module.css'

var foo = Array.from(Array(20).keys())

function VendorListSection(){

    const [filterOpened, setFilterOpened] = useState(false);

    return(
<div style = {{justifyContent:'space-around', backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2 480px)", paddingLeft: 50, paddingRight:50}}>



        <h1 className={classes.mainText}>Filters</h1>
         
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
       
        <h1 className={classes.mainText}>Promotions</h1>
        
        
<div className={classes.scrollingWrapper}>
{foo.map((i,index) =>
    <CartCard  key = {index} description = {i} style = {{padding: '25px'}}/>
)}
      </div>
      
     
        <h1 className={classes.mainText}>Carts</h1>
       
<Row style = {{justifyContent:'space-between'}}>





{foo.map((i,index) =>
    <CartCard key = {index} description = {i}/>
)}




</Row>
</div>
    )
}

export default VendorListSection;