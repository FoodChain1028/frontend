import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <Card className="w-100" style={{ maxWidth: "400px" }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    <Form>
                        <Form.Group id="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required />
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        Need an account? <Link to="../Signup">Signup</Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginPage;
