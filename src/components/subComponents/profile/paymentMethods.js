import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Form, Button, ListGroup, Image } from 'react-bootstrap';
import CardSection from './cardSection';
import { Elements, ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//IMAGES
import credit from '../../../assets/paymentMethods/visa256.png'
import google from '../../../assets/paymentMethods/google256.png'
import apple from '../../../assets/paymentMethods/apple256.png'




class PaymentMethods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            postal: '',
            errorMessage: null,
            paymentMethod: null,
            showPay: false,
            payStatus: false,
            successModal: false,
            android: true
        };
    }


    render() {
        return (
            <Container md="fluid" style={{ marginTop: "40%" }}>
                {/** BUTTON ADDS A PAYMENT METHOD*/}
                <Row>
                    <Col>
                    <Link to="/profile/paymentMethods/addPaymentMethod">
                        <Button>
                            Add Payment Option
                        </Button>
                    </Link>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <ListGroup defaultActiveKey="#link1">

                            <ListGroup.Item style={{padding: 10}} action onClick={() => console.log('')}>
                                <Image src={credit} width="50"height="50" />
                                {"   "}
                                Visa-xxxx-9345
                            </ListGroup.Item>
                            <ListGroup.Item style={{padding: 10}} action onClick={() => console.log('')}>
                            {this.state.android ?
                            <div>
                            <Image src={google} width="50"height="50" />
                            {"   "}
                            Google Pay
                            </div>
                            :
                            <div>
                            <Image src={apple} width="50"height="50" />
                            {"   "}
                            Apple Pay
                            </div>

                            }
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PaymentMethods


// const InjectedPaymentMethods = (props) => (
//     <ElementsConsumer>
//         {({ stripe, elements }) => (
//             <PaymentMethods
//                 stripe={stripe} elements={elements}  {...props}
//             />
//         )}
//     </ElementsConsumer>
// );

// const InjectedPaymentMethodsFinal = () => (
//     <Elements stripe={stripePromise}>
//         <InjectedPaymentMethods />
//     </Elements>
// );

//export default InjectedPaymentMethodsFinal;


/**
 *  <Col></Col>
              <Col style={{ textAlign: 'center' }}>
                  <Form onSubmit={()=>console.log('...')}>
                      <CardSection
                      />
                      <br />
                      <button style={{ textAlign: 'center', width: '60%', backgroundColor: this.state.payStatus ? 'Green' : 'Blue', color: 'white' }}>Pay</button>
                  </Form>
              </Col>
              <Col></Col>
 */