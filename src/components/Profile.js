import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

class Profile extends Component {
    render() {
        return (
            <Container fluid="md" style={{ marginTop: '15%' }}>
                <Row style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Col>
                        <h5>Settings</h5>
                        <p>Click on a button below to modify your settings.</p>
                    </Col>
                </Row>

                 {/**ACCOUNT SECTION */}
                <Row>
                    <Col>
                        <p>Your account</p>
                        <ListGroup defaultActiveKey="#link1">
                        <Link to="/profile/editName">
                            <ListGroup.Item action onClick={() => console.log('')}>
                                Name: Fausto Lopez
                            </ListGroup.Item>
                        </Link>
                        <Link to="/profile/editEmail">   
                            <ListGroup.Item action onClick={() => console.log('')}>
                                Email: flopez@gmail.com
                    </ListGroup.Item>
                        </Link>
                            <ListGroup.Item action onClick={() => console.log('')}>
                                Password: *******
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log('')}>
                                Payment Methods
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log('')}>
                                Push Notifications
                    </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <br/>
                {/**SUPPORT SECTION */}
                <Row>
                    <Col>
                    <p>Support</p>
                    <ListGroup defaultActiveKey="#link1">
                            <ListGroup.Item action onClick={() => console.log('')}>
                                Help
                        </ListGroup.Item>
                            <ListGroup.Item action onClick={() => console.log('')}>
                                App feedback
                    </ListGroup.Item>
                            <ListGroup.Item action onClick={() => console.log('')}>
                                COVID-19 Health & Safety
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => console.log('')}>
                                Logout
                    </ListGroup.Item>
                        </ListGroup>
                        
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Profile;