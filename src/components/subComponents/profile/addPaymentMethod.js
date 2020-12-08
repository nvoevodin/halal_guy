import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, ListGroup, Image } from 'react-bootstrap';
import CardSection from './cardSection';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51HhkvNBmZZhLkiuRi5FvyWO2fP9WIaL1MuWJ1NTJk5lXcPxosr9MfLMxs2s1ZwEmbpltJ2SAzQ9iwIzSb3SYscC900XpjX39y4');


class AddPaymentMethod extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payStatus: false
        };
    }

    render() {
        return (
            <Container style={{marginTop: '40%'}}>
                <Row>
                    <p>Select Method of Payment</p>
                </Row>
                <Row>
      
              <Col style={{ textAlign: 'center' }}>
                  <Form onSubmit={()=>console.log('...')}>
                      <CardSection
                      />
                      <br />
                      <button style={{ textAlign: 'center', width: '60%', backgroundColor: this.state.payStatus ? 'Green' : 'Blue', color: 'white' }}>Pay</button>
                  </Form>
              </Col>
    
                </Row>
            </Container>
        );
    }
}


const InjectedaddPaymentMethod = (props) => (
    <ElementsConsumer>
        {({ stripe, elements }) => (
            <AddPaymentMethod
                stripe={stripe} elements={elements}  {...props}
            />
        )}
    </ElementsConsumer>
);

const InjectedaddPaymentMethodFinal = () => (
    <Elements stripe={stripePromise}>
      <InjectedaddPaymentMethod />
    </Elements>
  );

export default InjectedaddPaymentMethodFinal

// const InjectedPaymentMethodsFinal = () => (
//     <Elements stripe={stripePromise}>
//         <InjectedPaymentMethods />
//     </Elements>
// );
