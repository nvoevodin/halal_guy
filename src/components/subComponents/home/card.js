import React, {Component} from 'react'
import {Card, Button} from 'react-bootstrap'

import classes from './card.module.css'


function CartCard () {
   
        return(

            <Card className={classes.cardClass}>
  <Card.Img variant="top" src="https://static3.bigstockphoto.com/2/9/2/large1500/292266295.jpg" />
  <Card.Body>
    <Card.Title>Jafar's Brain</Card.Title>

    <Button variant="warning" href="cart">Select</Button>
  </Card.Body>
</Card>
            
        )
    
}

export default CartCard;