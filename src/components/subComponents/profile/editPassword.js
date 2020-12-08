import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';

export default function NameForm(props) {
    const [name, setName] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
    }
    return (
        <Container style={{marginTop: '30%'}}>
            <form onSubmit={handleSubmit}>
                <label>
                    Password:
                 <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </Container>
    );
}