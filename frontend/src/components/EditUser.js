import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Card, Alert } from 'react-bootstrap';

// CRITICAL FIX: Define the base URL.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

function EditUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const { id } = useParams();
    const navigate = useNavigate();

    // Fetch the specific user data
    useEffect(() => {
        // Use the defined API_BASE_URL
        axios.get(`${API_BASE_URL}/users/` + id)
            .then(response => {
                setName(response.data.name);
                setEmail(response.data.email);
            })
            .catch(function (error) {
                console.error("Error loading user data:", error);
                setMessage('Error loading user data.');
            })
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            name: name,
            email: email,
        };

        // Use the defined API_BASE_URL
        axios.post(`${API_BASE_URL}/users/update/` + id, updatedUser)
            .then(res => {
                console.log(res.data);
                setMessage('User Updated Successfully!');
                setTimeout(() => {
                    navigate('/'); 
                }, 1500);
            })
            .catch(err => {
                console.error("Error updating user:", err);
                setMessage('Error updating user. Check console for details.');
            });
    };

    return (
        <div className="container mt-4">
            <Card>
                <Card.Header as="h3" className="text-warning">Edit User</Card.Header>
                <Card.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control 
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            Update User
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

export default EditUser;