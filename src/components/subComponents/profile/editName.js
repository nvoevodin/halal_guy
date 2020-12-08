import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
}

const editName = props => {
    return (
        <Container md="fluid">
            <br/>
            <Row style={{ marginTop: '30%' }}>
                <Col>
                    <Form onSubmit={()=>console.log('edit info')}>
                        <Form.Group controlId="fname">
                             <Form.Label>First Name*</Form.Label>
                            <Form.Control required placeholder="First Name" name="fname" type="name" onChange={handleChange} value={''} />
                        </Form.Group>

                        <Form.Group controlId="lname">
                        <Form.Label>Last Name*</Form.Label>
                            <Form.Control required placeholder="Last Name" name="lname" type="name" onChange={handleChange} value={''} />
                        </Form.Group>
                        <Button>
                            Save
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default editName;
