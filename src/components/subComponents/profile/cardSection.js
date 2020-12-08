import React from 'react';
import {
  CardElement

} from "@stripe/react-stripe-js";
import { Container, Form } from 'react-bootstrap';
import classes from './cardsection.module.css';

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      marginLeft: "20%",
      iconColor: "rgb(240, 57, 122)",
      color: "rgb(240, 57, 122)",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF"
      }
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238"
      }
    }
  }
};

function CardSection(props) {
  return (


    <Container className={classes.creditCard}>
      <Form.Group controlId="email">
          <Form.Control required placeholder="Email Address" name="email" type="email" onChange={props.handleChange} value={props.email} />
      </Form.Group>
      <CardElement options={CARD_ELEMENT_OPTIONS} className={classes.cardNumber} />
    </Container>


  );
};

export default CardSection;
