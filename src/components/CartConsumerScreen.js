import {useState} from 'react';
import {Col, Row,DropdownButton,Dropdown} from 'react-bootstrap'

import CartJumbotron from "./subComponents/cartConsumerScreen/cartJumbotron"
import MyMap from './subComponents/cartConsumerScreen/map'
import CartListSection from './subComponents/cartConsumerScreen/cartListSection'

function CartConsumer() {

    const [name, setName] = useState('Al Nusra Hijab');
    const [rating, setRating] = useState('5.0')
    const [price, setPrice] = useState(2)
    const [info, setInfo] = useState({})


  return (
      <div style = {{width:'90%', margin:'120px 5%'}}>
    <Row>
    <Col lg={{ span: 8, order: 1 }} xs={{ span: 12, order: 2}} md={{ span: 12, order: 2}}>
    <CartJumbotron name = {name} rating = {rating} price={price}/>  
    <hr class="solid"/>
    <CartListSection />

    


              </Col>
              <Col style = {{borderLeft: '.5px solid rgba(208, 218, 219, 0.753)'}}lg={{ span: 4, order: 2 }} xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1}}>

             
              <MyMap/>
          

              </Col>
              </Row>


    
    
   
   

    </div>
  );
}

export default CartConsumer;