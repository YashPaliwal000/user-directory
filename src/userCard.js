import React from 'react';

function UserCard({user}) {
    if (!user) return null;
    return (
        <div className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-info">📧 {user.email}</p>
            <p className="user-info">📞 {user.phone}</p>
            <p className="user-info">🌐 <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
        </div>
    )
}

export default UserCard;
