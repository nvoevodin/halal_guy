import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function EditPassword(props) {
    const [password, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        //CHANGE PASSWORD
    }
    return (
        <Container style={{ marginTop: '30%' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        required placeholder="Password" 
                        name="password" 
                        type="password" 
                        onChange={e => setName(e.target.value)} 
                        value={password} 
                    />
                </Form.Group>
                <Button type="submit">
                    Save
                </Button>
            </Form>
        </Container>
    );
}
