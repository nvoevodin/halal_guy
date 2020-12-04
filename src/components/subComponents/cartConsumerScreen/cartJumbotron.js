import React from 'react';
import {Dropdown,Jumbotron, Image, Row, Button,InputGroup,OverlayTrigger,Popover, Badge} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import classes from './cartJumbotron.module.css'
//import HalalImage from '../../assets/halalPic.jpg';

const CartJumbotron = (props) => {


  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Cart Info</Popover.Title>
      <Popover.Content>
        More info about this cart.
        
      </Popover.Content>
    </Popover>
  );


    return (
     
<Jumbotron className = {classes.JumboWidth}>
  
<div style = {{marginTop:'10%'}}>
<Badge pill variant="warning">
<FontAwesomeIcon icon={faStar} size = '1x' style = {{color:'white'}}/>
{' '}
    {props.rating}
  </Badge>
  <p className={classes.MainText}>{props.name}</p>

  <hr class="solid" className = {classes.lineStyle}/> 

<p className = {classes.smallText} style = {{display:'inline-block', verticalAlign:'middle',margin: '10px 0'}}> Pricing: {props.price === 1?'$':props.price === 2?'$$':'$$$'}</p>
<OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
<Button style = {{display:'inline-block', verticalAlign:'middle',margin: '10px 0', marginLeft:'30%'}} variant="outline-secondary">Information</Button>
</OverlayTrigger>

 </div>
</Jumbotron>
     
    )}
export default CartJumbotron