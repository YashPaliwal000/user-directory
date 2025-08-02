import React, { useState, useEffect } from 'react';
import '../css/user.css';
import UserCard from '../userCard';

const User = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log('fetching users');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [searchTerm]);

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="user-container">
            <h1 className="user-title">User Directory</h1>
            <input 
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="user-grid">
                {filteredUsers.length > 0 ?
                (filteredUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))):(<p>Not Found</p>)}
            </div>
        </div>
    )
}

export default User;