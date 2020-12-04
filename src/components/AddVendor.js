import React from 'react';
import {Row, Card, Accordion} from 'react-bootstrap'
import classes from './addVendor.module.css'
import AddVendorJumbotron from "./subComponents/addVendor/addVendorJumbotron"
import GuideCard from './subComponents/addVendor/card'
var foo = Array.from(Array(5).keys())


function AddVendorPage() {
  return (
      <div style = {{marginTop:'100px'}}>
    
    <AddVendorJumbotron/>

<div style = {{padding:'30px 100px' }}>
<h1 style = {{fontWeight:'lighter'}}>How to quickly connect your cart</h1>
<Row style = {{justifyContent:'stretch'}}>
{foo.map((i,index) =>
    <GuideCard key = {index} description = {i}/>
)}
</Row>

</div>
<div style = {{padding:'30px 100px', backgroundColor:'#ffd636'}}>
<h1 style = {{fontWeight:'lighter'}}>How Halal Guy works</h1>
<div className = {classes.divStyle}>

</div>
</div>

<div style = {{padding:'30px 100px' }}>
<h1 style = {{fontWeight:'lighter', marginBottom:'5%'}}>Popular questions</h1>

<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Do you use human meat?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Sometimes</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Are you guys from Raqqa?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Most of us are.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>

    
<Row  style={{ backgroundColor: "#fff"}}>


          <p style={{width: "40%", margin: "3% 30%", color: "black", textAlign:'center'}}>
            2020. VERYCOOL Studio. All Rights Reserved.
          </p>
        </Row>

    </div>
  );
}

export default AddVendorPage;