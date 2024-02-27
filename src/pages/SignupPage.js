import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <Card className="w-100" style={{ maxWidth: "400px" }}>
                <Card.Body>
                    <h1 className="text-center mb-4">Sign Up</h1>
                    <Form>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit">Sign Up</Button>
                        <div className="w-100 text-center mt-2">
                            Already have an account? <Link to="../Login">Log in</Link >.
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SignupPage;
