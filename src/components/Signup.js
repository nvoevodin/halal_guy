import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../helpers/auth';
//import classes from './signup.module.css';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

const moment = require("moment");

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
            error: null,
            email: '',
            password: '',
            fname: '',
            lname: '',
            phone: '',
            city_id: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    async handleSubmit(event) {
        console.log('signing up with...',
            this.state.fname, this.state.lname, this.state.phone, this.state.email, this.state.city_id)

        event.preventDefault();
        this.setState({ error: '' });
        try {
            await signup(this.state.email, this.state.password)
                .then(res => {
                    //console.log('hello:',res.user.uid)
                    //this.addCustomer(res.user.uid);
                })
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    addCustomer = (uid) => {
        console.log('signing up with...',
            this.state.fname, this.state.lname, this.state.phone, this.state.email, this.state.city_id)
        let sqlStamp = moment().utcOffset('-0400').format("YYYY-MM-DD HH:mm:ss").substr(0, 18) + '0';

        fetch(
            // MUST USE YOUR LOCALHOST ACTUAL IP!!! NOT http://localhost...
            `${global.api}/customers?fbid=${uid}&customer_name=${this.state.fname + ' ' + this.state.lname}&city_id=${this.state.city_id}&phone=${this.state.phone}&email=${this.state.email}&time_joined=${sqlStamp}`,
            { method: "POST" }
        ).catch((error) => {
            console.log(error)
        })

    }

    handleCity = (event) => {
        //console.log('city', this.state.city_id);
        this.setState({ city_id: event.target.value });
    }

    render() {
        //console.log(this.state.fname, this.state.lname, this.state.city_id, this.state.phone)
        return (
            <Container style={{ marginTop: '15%' }}>
                <Row>
                    <Col sm={3}>
                    </Col>

                    <Col sm={6}>

                        {/**BELOW IS THE SIGN UP CONTAINER FORM */}


                        <p >Create an account in order to save payment options, save your favorite meals and manage your halal experience.</p>

                        <Form onSubmit={this.handleSubmit}>


                            <Form.Group controlId="fname">

                                <Form.Control required placeholder="First Name" name="fname" type="name" onChange={this.handleChange} value={this.state.fname} />

                            </Form.Group>

                            <Form.Group controlId="lname">

                                <Form.Control required placeholder="Last Name" name="lname" type="name" onChange={this.handleChange} value={this.state.lname} />

                            </Form.Group>

                            <Form.Group controlId="phone">

                                <Form.Control placeholder="Phone" name="phone" type="phone" onChange={this.handleChange} value={this.state.phone} />
                                <Form.Text className="text-muted">
                                    Phone format should be as follows: 6466393360
                  </Form.Text>
                            </Form.Group>


                            <Form.Group controlId="email">
                                <Form.Control placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                  </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Control placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Signup
                </Button>
                        </Form>

                        <p >By clicking “Signup,” you agree to PitaPal General Terms and Conditions and acknowledge you have read the Privacy Policy.</p>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        <p>Are you a vendor? <Link to="/addVendor">Vendor Portal</Link></p>
                    </Col>

                    <Col sm={3}>
                    </Col>
                </Row>






            </Container>
        )
    }
}