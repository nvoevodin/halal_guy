import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
}

const editEmail = props => {

    return (
        <Container md="fluid">
            <br/>
            <Row style={{ marginTop: '30%' }}>
                <Col>
                    <Form onSubmit={()=>console.log('edit info')}>


                        <Form.Group controlId="email">
                            <Form.Label>Email*</Form.Label>
                            <Form.Control required placeholder="Email" name="email" type="email" onChange={handleChange} value={''} />

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

export default editEmail;