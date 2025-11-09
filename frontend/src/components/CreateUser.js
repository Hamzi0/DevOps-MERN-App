import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Alert } from 'react-bootstrap';

// CRITICAL FIX: Define the base URL.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name: name,
            email: email,
        };

        // Use the defined API_BASE_URL
        axios.post(`${API_BASE_URL}/users/add`, newUser)
            .then(res => {
                console.log(res.data);
                setMessage('User Added Successfully! (' + res.data + ')');
                setName('');
                setEmail('');
                setTimeout(() => setMessage(''), 3000); 
            })
            .catch(err => {
                console.error("Error adding user:", err);
                setMessage('Error adding user. Check console for details: ' + err.response?.data);
            });
    };

    return (
        <div className="container mt-4">
            <Card>
                <Card.Header as="h3" className="text-success">Create New User</Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter full name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Enter email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Add User to Directory
                        </Button>
                    </Form>

                    {message && (
                        <Alert className="mt-3" variant={message.startsWith('Error') ? 'danger' : 'success'}>
                            {message}
                        </Alert>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CreateUser;