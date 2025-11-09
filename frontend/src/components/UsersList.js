import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Card, Button } from 'react-bootstrap';

// CRITICAL FIX: Define the base URL. It will use the environment variable set in docker-compose.yml, 
// or default to localhost for local development.
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

// Component for a single user row in the table
const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{new Date(props.user.dateJoined).toLocaleDateString()}</td>
        <td>
            <Link to={"/edit/"+props.user._id} className="btn btn-sm btn-info me-2">Edit</Link> 
            <Button variant="danger" size="sm" onClick={() => { props.deleteUser(props.user._id) }}>
                Delete
            </Button>
        </td>
    </tr>
)

function UsersList() {
    const [users, setUsers] = useState([]);

    // Function to fetch users from the backend
    const fetchUsers = () => {
        // Use the defined API_BASE_URL
        axios.get(`${API_BASE_URL}/users/`)
            .then(response => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users: ", error);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, []); 
    
    // Function to handle deletion
    const deleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            // Use the defined API_BASE_URL
            axios.delete(`${API_BASE_URL}/users/` + id)
                .then(res => {
                    console.log(res.data);
                    setUsers(users.filter(el => el._id !== id));
                })
                .catch(err => console.error("Error deleting user:", err));
        }
    }

    const userList = () => {
        return users.map(currentUser => {
            return <User user={currentUser} deleteUser={deleteUser} key={currentUser._id}/>;
        })
    }

    return (
        <div className="container mt-4"> 
            <Card>
                <Card.Header as="h3" className="text-primary">User Directory</Card.Header>
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date Joined</th>
                                <th>Actions</th> 
                            </tr>
                        </thead>
                        <tbody>
                            { userList() }
                        </tbody>
                    </Table>
                    {users.length === 0 && (
                        <p className="text-center text-muted">No users found. Please add a new user.</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default UsersList;